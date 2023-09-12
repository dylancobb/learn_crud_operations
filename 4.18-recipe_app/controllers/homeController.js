'use strict';

var courses = [
	{
		title: "Event Driven Cakes",
		cost: 50
	},
	{
		title: "Asynchronous Artichoke",
		cost: 25
	},
	{
		title: "Object Oriented Orange Juice",
		cost: 10
	}
];

module.exports = {
	showIndex: (req, res) => {
		res.render('index');
	},
	showCourses: (req, res) => {
		res.render("courses", {
			offeredCourses: courses
		});
	},
	showContact: (req, res) => {
		res.render('contact');
	},
	postSignUpForm: (req, res) => {
		res.render('thanks');
	},
};