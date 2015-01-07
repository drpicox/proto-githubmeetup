/* clean production generated files and temporary files */
module.exports = {
	www: {
		files: [{
			dot: true,
			src: [ '<%= config.dist %>/*','!<%= config.dist %>/.git' ],
		}]
	},
	tmp: {
		files: [{
			dot: true,
			src: [ '<%= config.tmp %>' ],
		}]
	},
};