/* Creates a webserver */
module.exports = {
	options: {
		port: '<%= config.connectPort %>',
	    livereload: '<%= config.livereloadPort %>',
		hostname: '0.0.0.0',
		open: 'http://localhost:<%= connect.options.port %>',
	},
	livereload: {
		options: {
			base: [
				'<%= config.dist %>','<%= config.tmp %>','<%= config.src %>','.'
			],
		}
	},
	dist: {
		options: {
			base: '<%= config.dist %>'
		}
	}
};