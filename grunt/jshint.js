/* JS hint checks js files looking for potential bugs */
module.exports = {
	options: {
		jshintrc: '.jshintrc'
	},
	all: [
		'Gruntfile.js',
		'<%= config.src %>/**/*.js',
	]
};