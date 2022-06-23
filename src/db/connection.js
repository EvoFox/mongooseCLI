// Import libraries for mongoose and dotenv
const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Successful database connection");
	} catch (error) {}
};

if (process.env.DEBUG == "true") {
	connection();
}
module.export = connection;
