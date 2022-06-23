const mongoose = require("mongoose");
const Film = require("./movieModels");

exports.addFilm = async (filmObj) => {
	try {
		await Film.create(filmObj);
	} catch (error) {
		console.log(error);
	}
};
