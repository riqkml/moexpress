const db = require('../models')
const Post = db.post

exports.findAll = (req, res) => {
    Post.find()
        .then(result => {
            res.status(200).send({
                status: true,
                code: "200",
                message: "Data found",
                data: result
            })
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error while retrieving data'
            })
        })
}

exports.create = (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        published: req.body.published ? req.body.published : false
    })

    post.save(post)
        .then(result => {
            res.send({
                status: true,
                code: "200",
                message: "Data found",
                data: result
            })
        }).catch(err => {
            res.status(409).send({
                message: err.message || 'Some error while post data'
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Post.findById(id)
        .then(result => {
            res.send({
                status: true,
                code: "200",
                message: "Data found",
                data: result
            })
        }).catch(err => {
            res.status(409).send({
                message: err.message || `Some error while show post = ${id}`
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id

    Post.findByIdAndUpdate(id, req.body)
        .then(result => {
            if (!result) {
                res.status(404).send({
                    message: 'Post not found'
                })
            }
            res.send({
                status: true,
                code: "200",
                message: 'Post was updated'
            })
        }).catch(err => {
            res.status(409).send({
                message: err.message || `Some error while update post = ${id}`
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Post.findByIdAndRemove(id)
        .then(result => {
            if (!result) {
                res.status(404).send({
                    message: 'Post not found'
                })
            }
            res.send({
                status: true,
                code: "200",
                message: 'Post was delete'
            })
        }).catch(err => {
            res.status(409).send({
                message: err.message || `Some error while delete post = ${id}`
            })
        })
}