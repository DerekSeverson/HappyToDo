(function () {
  'use strict';

  angular.module('App.Todo')

  .directive('todoList', [
    todoListDirective
  ]);

  function todoListDirective() {
    return {
      restrict: 'E',
      scope: {
        vm: '=bindViewModel'
      },
      template: {
        gulp_inject: 'todoList.htm'
      },
      bindToController: true,
      controllerAs: 'ctrl',
      controller: [
        TodoListCtrl
      ]
    };
  }

  function TodoListCtrl() {
    var ctrl = this;
  }

}());