const mongoose = require("mongoose");
const Film = require("./movieModels");

exports.addFilm = async (filmObj) => {
	try {
		await Film.create(filmObj);
	} catch (error) {
		console.log(error);
	}
};

exports.listFilm = async () => {
	try {
		return await Film.find({});
	} catch (error) {
		console.log(error);
	}
};

exports.updateFilm = async (criteria, updates) => {
	try {
		// Example parameters:
		// criteria: { title: "Testing Title" }
		// updates: { title: "New Testing Title", actor: "John Doe", rating: 5 }

		await Film.updateOne(criteria, updates);
	} catch (error) {
		console.log(error);
	}
};

exports.deleteFilm = async (criteria) => {
	try {
		// Example parameters:
		// criteria: { title: "Testing Title" }
		await Film.deleteOne(criteria);
	} catch (error) {
		console.log(error);
	}
};
