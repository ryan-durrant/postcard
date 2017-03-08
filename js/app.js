(function(window, document) {
  angular.module("app", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: '../views/yourWorld.html'
      });
      // .state()
  });
})(window, document);
