/* generate a js file with all templates inside and optimize by preloading */
module.exports = {
	rt: {
		cwd: '<%= config.src %>',
		src: [ '*/**/*.html' ],
		dest: '<%= config.dist %>/<%= config.mainModule %>-views.js',
		options: {
			module: '<%= config.fullModule %>',
		},
	},
};