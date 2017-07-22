const mongoose = require('mongoose');
const { Schema } = require('mongoose');

// This is the schema to represent an entity record
const entitySchema = Schema({
  query: { type: String, required: false }, 
  score: { type: Number, required: false }, 
  type: { type: String, required: false }, 
  date: { type: Date, default: Date.now() }

  /*results: { type: [], required: true },
  averageScore: { type: Number, required: true },*/
  // Consider querying by a specific type of search instead
  
});

/* *Instance method* that is used to return an object that only
   exposes *some* of the fields we want from the underlying data */
entitySchema.methods.apiRepr = function() {
  return {
    id: this._id,
    query: this.query,
    score: this.score, 
    type: this.type, 
    date: this.date, 
    /* results: [],
    average: this.average,*/ 
    // source: this.source
  };
}

/* All instance methods and virtual properties on the schema must be
  defined *before* the call is made to `.model`. */
module.exports = mongoose.model('Entity', entitySchema);