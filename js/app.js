(function(window, document) {
  angular.module("app", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../views/yourWorld.html'
      });
      // .state()
  });
})(window, document);
