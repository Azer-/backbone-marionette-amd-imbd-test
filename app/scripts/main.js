require([
  'config'
], function () {
  'use strict';

  require(['index'], function (Module) {
    var main = new Module({el: '#main'});
    main.start();
  });
});
