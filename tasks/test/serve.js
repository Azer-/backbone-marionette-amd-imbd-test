/* global module */
'use strict';

module.exports = function (grunt) {
  grunt.registerTask('serve', function (target) {
    grunt.task.run([
      'clean:server',
      'handlebars',
      'connect:test',
      'open:test',
      'watch:livereload'
    ]);
  });
};