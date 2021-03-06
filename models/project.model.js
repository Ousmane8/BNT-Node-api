const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
        name: String,
        description: String,
        startdate: String,
        enddate: String,
        customer: String,
        sum: String,
        status: String,

}, {
    timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);
