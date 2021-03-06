'use strict';

angular.module('extendmedBoilerplate')
  .controller('NavbarCtrl', function ($scope, $location, Auth, LanguageBox) {

    angular.extend(this, new LanguageBox.mixin($scope, Auth, LanguageBox, 'navbar'));

    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'Videos',
      'link': '/videos'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.getLanguage = Auth.getLanguage;

    $scope.logout = function () {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function (route) {
      return route === $location.path();
    };
  });
