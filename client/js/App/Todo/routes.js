(function () {
  'use strict';

  angular.module('App.Todo')
    .config(['$stateProvider', '$urlRouterProvider',
      configAppTodo
    ]);

  function configAppTodo($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('todos', {
        url: '/',
        resolve: {
          'TodosViewModel': [function () {

            return {
              listOfTodos: [
                'Take Dog for Walk',
                'Wash All the Dishes',
                'Make the Bed'
              ]
            };
          }]
        },
        views: {
          'main': {
            template: '<todo-list bind-view-model="ctrl.ViewModel"></todo-list>',
            controllerAs: 'ctrl',
            controller: ['TodosViewModel',
              function (TodosViewModel) {
                this.ViewModel = TodosViewModel;
              }
            ]
          }
        }
      });


  }

}());