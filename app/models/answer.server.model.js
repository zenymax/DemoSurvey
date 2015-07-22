'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Answer Schema
 */
var AnswerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    question_id: {
        type: Schema.ObjectId,
        ref: 'Question'
    }
});

mongoose.model('Answer', AnswerSchema);