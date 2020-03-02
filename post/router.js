const express = require('express')
const Post = require('./model')

// const { Router } = express
// const router = Router()

const router = express.Router()

async function getPosts (request, response, next) {
  try {
    const posts = await Post.findAll()

    response.send(posts)
  } catch (error) {
    next(error)
  }
}

router.get(
  '/post',
  getPosts
)

router.post(
  '/post',
  async (request, response, next) => {
    try {
      const { body } = request
      console.log('body test:', body)

      const post = await Post.create({ text: body.text })

      response.send(post)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router