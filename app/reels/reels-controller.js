(function(){

  angular
  .module('reels')
  .controller('ReelsController', [
    'reelsService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
    UserController
    ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
   function UserController( reelsService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;
    self.reels = [ ];

    // Load all registered reels

    reelsService
    .loadReels()
    .then( function( reels ) {
      self.reels    = [].concat(reels);
    });

  }

})();
