/*
 Watches for changes 
 this is the basic for livereload
*/
module.exports = {
	less: {
		files: ['<%= config.src %>/**/*.less'],
		tasks: ['less','autoprefixer']
	},
	css: {
		files: ['<%= config.src %>/*/styles/{,*/}*.css'],
		tasks: ['copy:styles','autoprefixer']
	},
	images: {
		files: ['<%= config.src %>/*/images/{,*/}*'],
	},
	scripts: {
		files: ['<%= config.src %>/{,*/,*/*/}*.js'],
		tasks: ['jshint'],
	},
	stub: {
		files: ['<%= config.src %>/stub/{,*/}*'],
	},
	views: {
		files: ['<%= config.src %>/views/{,*/}*'],
	},
	livereload: {
		options: {
			livereload: '<%= connect.options.livereload %>',
		},
		files: [
			'<%= config.src %>/*/assets/{,*/}*',
			'<%= config.src %>/*/resources/{,*/}*',
			'<%= config.src %>/*/images/{,*/}*',
			'<%= config.src %>/*/views/{,*/}*',
			'<%= config.src %>/*/styles/{,*/}*',
			'<%= config.src %>/{,*/,*/*/}*.js',
			'<%= config.src %>/{,*/,*/*/}*.html',
			'<%= config.tmp %>/{,*/,*/*/}*',
		],
	}
};