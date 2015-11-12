var mongoose = require('mongoose');
var mongoUrl = 'mongodb://localhost/sems';
var mongoOptions = {};

mongoose.connect(mongoUrl, mongoOptions, function (err, res) {
    if (err) {
        console.log('[DB] Connection failed to ' + mongoUrl + '. ' + err);
    } else {
        console.log('[DB] Successfully connected to: ' + mongoUrl);
    }
});

