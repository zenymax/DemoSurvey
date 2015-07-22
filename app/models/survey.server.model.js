'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Survey Schema
 */
var SurveySchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: { 
    	type: String 
    }
});

mongoose.model('Survey', SurveySchema);