/* eslint-disable no-unused-vars */
const express = require('express')
const usersRouter = express.Router()
const { UserModal, UserRegValidate } = require('../Models/Users_modal')
const bcrypt = require('bcrypt')

usersRouter.get('/', async (req, res) => {
  try {
    const Allusers = await UserModal.find()

    res.json({ Allusers })
  } catch (error) {
    res.json(error.message)
  }
})

usersRouter.post('/', async (req, res) => {
  try {
    const { error } = UserRegValidate(req.body)
    if (error) return res.json(error.message)

    const newuser = new UserModal(req.body)
    const salt = await bcrypt.genSalt(10)
    newuser.Password = await bcrypt.hash(newuser.Password, salt)
    await newuser.save()

    res.send({ status: (200), message: 'successfully Add' })
  } catch (error) {
    console.log(error.message)
  }
})

usersRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await UserModal.findByIdAndUpdate(id, {
      username: req.body.username,
      Password: req.body.Password,
      userStatus: req.body.userStatus,
      usertype: req.body.usertype,
      dar: req.body.dar,
      Faculty_id: req.body.Faculty_id,

    }, { new: true })

    res.send({ status: (200), message: 'successfully updated' })
  } catch (error) {
    res.send(error.message)
  }
})

usersRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await UserModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.send(error.message)
  }
})

module.exports = usersRouter
