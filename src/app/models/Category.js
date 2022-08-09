const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Category = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: Array,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Category', Category, 'categories');
