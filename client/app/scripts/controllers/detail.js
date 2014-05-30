angular.module('brandid.states.demo')

.controller('DetailController', ['$rootScope', '$scope', '$state', '$stateParams', function($rootScope, $scope, $state, $stateParams) {
  
  $scope.detailCtrl = {
    current : null
  };

  // inherit the collection from the parent controller and find the current model
  // $scope.fetchMonstersPromise.then(function(col) {
    $scope.detailCtrl.current = $scope.masterDetailCtrl.articles.find(function(current) {
      return current.id == $stateParams.monsterId;
    })


  $scope.transitionTo = function(state) {
    $state.transitionTo(state);
  }

  $scope.isActiveState = function(state) {

    if(state == $state.current.name) {
      return 'light-back';
    } else {
      return
    }
  }



}])

.controller('EventArticleController', ['$rootScope', '$scope', '$state', '$stateParams', function($rootScope, $scope, $state, $stateParams) {
  

  $scope.detailCtrl = {
    current : null
  };

  // inherit the collection from the parent controller and find the current model
  // $scope.fetchMonstersPromise.then(function(col) {
    $scope.detailCtrl.current = $scope.masterDetailCtrl.articles.find(function(current) {
      return current.id == $stateParams.monsterId;
    })


  $scope.eventCtrl = {
    current : null
  };


  // inherit the collection from the parent controller and find the current model
  // $scope.fetchMonstersPromise.then(function(col) {
    $scope.eventCtrl.current = $scope.masterDetailCtrl.events.find(function(current) {
      return current.id == $stateParams.monsterId;
    })


  $scope.transitionTo = function(state) {
    $state.transitionTo(state);
  }

  $scope.isActiveState = function(state) {

    if(state == $state.current.name) {
      return 'light-back';
    } else {
      return
    }
  }



}]);