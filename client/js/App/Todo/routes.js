(function () {
  'use strict';

  angular.module('App.Todo')
    .config(['$stateProvider', '$urlRouterProvider',
      configAppTodo
    ]);

  function configAppTodo($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/');

    //$stateProvider
    //
    //  .state('state', {
    //    url: 'state',
    //    data: {
    //
    //    },
    //    resolve: {
    //
    //    },
    //    views: {
    //
    //    }
    //  })
    //
    //  .state('state.child', {
    //    url: 'child',
    //    data: {
    //
    //    },
    //    resolve: {
    //
    //    },
    //    views: {
    //
    //    }
    //  });

  }

}());