// Import mongoose
const mongoose = require("mongoose");

// Define schema
const filmSchema = new mongoose.Schema({
	title: {
		type: String,
		unique: true,
		require: true,
	},
	actor: {
		type: String,
	},
	rating: {
        type: Number,
	},
});

// Create the object to export and export it
const Film = mongoose.model("Film", filmSchema);
module.exports = Film;
