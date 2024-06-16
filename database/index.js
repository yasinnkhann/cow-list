const mongoose = require('mongoose');

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose.connect('mongodb://localhost/cowList', options);

const cowSchema = mongoose.Schema({
	name: String,
	description: String,
});

const Cow = mongoose.model('Cow', cowSchema);

const getCows = async cb => {
	try {
		const cows = await Cow.find({});
		cb(cows, null);
	} catch (err) {
		cb(err, null);
	}
};

const postCow = async (cowDetails, cb) => {
	const { name, description } = cowDetails;

	try {
		const editedCow = {
			name,
			description,
		};

		const freshCow = new Cow(editedCow);
		const savedCow = await freshCow.save();
		cb(null, savedCow._doc);
	} catch (err) {
		cb(err, null);
	}
};

const editCow = async (id, newCowInfo, cb) => {
	const { name, description } = newCowInfo;

	try {
		const updatedCow = await Cow.findOneAndUpdate(
			{ _id: id },
			{ name, description }
		);
		cb(null, updatedCow._doc);
	} catch (err) {
		cb(err, null);
	}
};

const deleteCow = async (id, cb) => {
	try {
		const deletedCow = await Cow.deleteOne({ _id: id });
		cb(null, deletedCow);
	} catch (err) {
		cb(err, null);
	}
};

module.exports = {
	getCows,
	postCow,
	editCow,
	deleteCow,
};
