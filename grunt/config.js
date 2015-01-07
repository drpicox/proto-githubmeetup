var yoConfig = require('../.yo-rc.json')['generator-drpx'];

/* common configuration for all modules. */
module.exports = {
	src: 'src',
	tmp: '.tmp',
	dist: 'www',
	connectPort: 9000 + yoConfig.portOffset,
	livereloadPort: 19000 + yoConfig.portOffset,
	mainModule: yoConfig.mainModule,
	fullModule: yoConfig.package + '.' + yoConfig.mainModule,
};