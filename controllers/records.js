const express = require('express')
const { create } = require('../models/records')
const router = express.Router()
const Records = require('../models/records')

// Index
router.get('/', (req, res) => {
    Records.find({}, (err, foundRecords) => {
        res.json(foundRecords)
    })
})

// Delete
router.delete('/:id', (req, res) => {
    Records.findByIdAndRemove(req.params.id, (err, deletedRecord) => {
        res.json(deletedRecord)
    })
})

// Update
router.put('/:id', (req, res) => {
    Records.findByIdAndUpdate(req.params.id, req.body, { new:true }, (err, updatedRecord) => {
        res.json(updatedRecord)
    })
})

// Create
router.post('/', (req, res) => {
    Records.create(req.body, (err, createdRecord) => {
        res.json(createdRecord)
    })
})

// Show
router.get('/:id', (req, res) => {
    Records.findById(req.params.id, (err, foundRecord) => {
        res.json(foundRecord)
    })
})