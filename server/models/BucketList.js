'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const bucketSchema = new mongoose.Schema({
    _creator: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },

    title: {
        type: String,
    },

    description: {
        type: String,
    },

    tagged: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },

    status: {
        type: String,
        default: "0"
    }
}, {
    timestamps: true
});

const Bucket = mongoose.model('Bucket', bucketSchema)