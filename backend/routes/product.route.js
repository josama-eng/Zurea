const express = require('express')
const productRoute = express.Router()
const ProductModel = require('../models/product.model')

productRoute.get('/get-all/:elPerPage/:page', (req, res) => {
    console.log(req.params);
    const {elPerPage, page} = req.params
    ProductModel
        .find({})
        .limit(elPerPage)
        .skip(elPerPage * page)
        .then(data => {
            ProductModel
                .count()
                .exec((error, count) => {
                    if (error) {
                        return res.status(420).send("Error on count.")
                    }
                    return res.send({
                        elements: data,
                        pagination: {
                            totalItems: count,
                            page: Number(page),
                            elPerPage: Number(elPerPage)
                        }
                    })
                })
        })
        .catch(error => res.status(420).send('Error in DB.'))
})

productRoute.post('/search', (req, res) => {
    ProductModel
        .find({
            // $regex = find any title with searchParam
            // $options = 'i' not case sensitive
            title: {$regex: req.body.searchParam, $options: "i"}
        })
        .then(data => {
            console.log(data);
            if (!data || !data.length) {
                return res.status(209).send('no results')
            }
            res.send(data)
        })
        .catch(error => {
            console.error(error)
            res.status(415).send('error on search.')
        })
})

module.exports = productRoute