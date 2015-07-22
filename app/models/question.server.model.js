'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Question Schema
 */
var QuestionSchema = new Schema({
    name: { 
    	type: String, 
    	required: true 
    },
    description: { 
    	type: String 
    },
    survey_id: { 
    	type: Schema.ObjectId, 
    	ref: 'Survey'
    }
});

mongoose.model('Question', QuestionSchema);