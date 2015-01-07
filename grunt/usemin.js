/* transforms index.html to compress all dependences in few files. */
module.exports = {
	html: [ '<%= config.dist %>/index.html' ],
	//html: ['<%= config.dist %>/{,*/}*.html'],
	//css: ['<%= config.dist %>/css/{,*/}*.css'],
	options: {
		dirs: ['<%= config.dist %>']
	}
};