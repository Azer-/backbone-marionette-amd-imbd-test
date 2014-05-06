'use strict';

require.config({
  shim: {
    // zepto
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  },
  paths: {
    jquery: '../bower_components/zeptojs/dist/zepto',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    'handlebars.runtime': '../bower_components/handlebars/handlebars.runtime.amd',
    handlebars: 'vendor/handlebars',
    marionette: '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    superagent: '../bower_components/superagent/superagent',
    fastclick: '../bower_components/fastclick/lib/fastclick',
    woodman: '../bower_components/woodman/dist/woodman-browser-amd'
  },

  deps: ['jquery', 'underscore']
});
