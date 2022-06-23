require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");

const {
	addFilm,
	listFilm,
	updateFilm,
	deleteFilm,
} = require("./movies/movieMethods");

const app = async (yargsObj) => {
	try {
		if (yargsObj.add) {
			// pass to create function
			await addFilm({
				title: yargsObj.title,
				actor: yargsObj.actor,
				rating: yargsObj.rating,
			});
			console.log(await listFilm());
		} else if (yargsObj.list) {
			// Pass to read function
			console.log(await listFilm());
		} else if (yargsObj.update) {
			// Build Criteria
			const criteria = { title: yargsObj.update };

			// Build update fields
			let update = {};
			if (yargsObj.title) {
				update = { ...update, title: yargsObj.title };
			}
			if (yargsObj.actor) {
				update = { ...update, actor: yargsObj.actor };
			}
			if (yargsObj.rating) {
				update = { ...update, rating: yargsObj.rating };
			}

			console.log(update);
			// Pass to update function
			await updateFilm(criteria, update);
		} else if (yargsObj.delete) {
			//Build Criteria
			const criteria = { title: yargsObj.delete };

			// Pass to delete function
			await deleteFilm(criteria);
		} else {
			// list the available options
			console.log("incorrect command");
		}

		await mongoose.disconnect();
	} catch (error) {
		console.log(error);
	}
};

app(yargs.argv);
