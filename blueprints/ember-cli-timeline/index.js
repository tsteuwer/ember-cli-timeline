/*jshint node:true*/
'use strict';

var TIMELINE_JS_VERSION = '3.3.11';

module.exports = {
  description: 'This plugin injects a TimelineJS component',
	afterInstall: function(options) {
		this.ui.writeLine('Importing TimlineJS3@' + TIMELINE_JS_VERSION + '...');

		return this.addBowerPackageToProject('https://github.com/NUKnightLab/TimelineJS3.git', TIMELINE_JS_VERSION);
	},
	isDevelopingAddon: function() {
		return true;
	}
};
