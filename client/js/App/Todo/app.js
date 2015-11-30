(function () {
  'use strict';

  angular.module('App.Todo', [
    'Vendor'
  ])

  .config(['$locationProvider',
    function ($locationProvider) {
      $locationProvider.html5Mode(true);
    }
  ])

  .run(['$rootScope', 'ngProgressLite',
    function ($rootScope, ngProgressLite) {
      $rootScope.$on('$stateChangeStart', function () {
        ngProgressLite.start().set(0.6);
      });

      $rootScope.$on('$stateChangeSuccess', function () {
        ngProgressLite.done();
      });

      $rootScope.$on('$stateChangeError', function () {
        ngProgressLite.done();
      });
    }
  ]);

}());
