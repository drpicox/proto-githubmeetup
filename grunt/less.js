/* Generates .css files from less */
module.exports = {
	build: {
		files: {
			'<%= config.tmp %>/styles.css': '<%= config.src %>/styles.less'
		},
		options: {
			paths: [ '<%= config.src %>/', '.' ],
			compress: false,
			yuicompress: false,
			dumpLineNumbers: 'comments',
			optimization: 0,
		},
	},
};