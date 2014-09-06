angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeCtrl', function($scope) {

})

.controller('WhereCtrl', function($scope) {

})

.controller('SessionsCtrl', function($scope, $http, $ionicLoading) {
  $scope.sessions = [
    { title: 'Building Mobile Apps', id: 1 }
  ];

  $ionicLoading.show({
    template: "loading..."
  });

  $http({
    url: "http://dev-d7-ionic-talk.gotpantheon.com/api/v/sessions",
    method: "GET"
  }).success(function(response){
    console.log(response)
    $scope.sessions = response;
    $ionicLoading.hide();
  }).error(function(response){
    console.log(response);
  });
})

.controller('SessionCtrl', function($scope, $stateParams) {

})

.controller('ScheduleCtrl', function($scope) {

})

.controller('AttCtrl', function($scope, $http, $ionicLoading) {
  $scope.atts = [];
  $ionicLoading.show({
    template: "loading..."
  });

  $http({
    url: "http://dev-d7-ionic-talk.gotpantheon.com/api/v/attendees",
    method: "GET"
  }).success(function(response){
    console.log(response)
    $scope.atts = response;
    $ionicLoading.hide();
  }).error(function(response){
    console.log(response);
  });

  $scope.getItemHeight = function(item, index) {
    return (index % 2) === 0 ? 50 : 50;
  }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
