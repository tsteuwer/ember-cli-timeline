/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-timeline',
	included: function(app, parentAddon) {
		var target = parentAddon || app;

		this._super.included(target);

		target.import(target.bowerDirectory + '/TimelineJS3/compiled/js/timeline.js');
		target.import(target.bowerDirectory + '/TimelineJS3/compiled/css/timeline.css');
	}
};
