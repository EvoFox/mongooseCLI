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

exports.updateFilm = async (criteria, filmObj) => {
	try {
		await Film.updateOne(criteria, filmObj);
	} catch (error) {
		console.log(error);
	}
};

exports.deleteFilm = async (criteria) => {
	try {
		await Film.deleteOne(criteria);
	} catch (error) {
		console.log(error);
	}
};
