mineSweeper.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory) {

    $scope.difficulty = 0.15;

    $scope.tileContainer = {};



    $scope.showTile = function(tile) {

      tile.show = true;
      console.log(tile);
    };

    $scope.startGame = function() {
      TilesFactory.createBoard(10, 10);
      TilesFactory.makeBombs($scope.difficulty);
      TilesFactory.createNeighborsAndClues();
      $scope.tiles = TilesFactory.tiles;

      $scope.tileContainer = {
          "width": TilesFactory.rowLength * 20 + "px",
          "height": TilesFactory.rowLength * 20 + "px",
          "margin": "0 auto"
      };
    }

});
