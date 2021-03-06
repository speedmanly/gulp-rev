'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var rev = require('./index');

it('should rev files', function (cb) {
	var stream = rev();

	stream.on('data', function (file) {
		assert.equal(file.path, 'unicorn-098f6bcd.css');
		cb();
	});

	stream.write(new gutil.File({
		path: 'unicorn.css',
		contents: new Buffer('test')
	}));
});
