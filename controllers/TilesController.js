mineSweeper.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory) {

    $scope.difficulty = 0.15;

    $scope.tileContainer = {};

    $scope.showTile = function(tile) {
      if(tile.bomb){
      tile.show = true;
        alert("LOSER");
      }
      if(tile.clue === 0 && tile.show === false){
        tile.show = true;
        $scope.openNeighbors(tile);
      }
      console.log(tile);
    };

    $scope.startGame = function() {
      TilesFactory.createBoard(6, 6);
      TilesFactory.makeBombs($scope.difficulty);
      TilesFactory.createNeighborsAndClues();
      $scope.tiles = TilesFactory.tiles;

      $scope.tileContainer = {
          "width": TilesFactory.colLength * 20 + "px",
          "height": TilesFactory.rowLength * 20 + "px",
          "margin": "0 auto",
          "border": "2px solid red",
      };
    };

    $scope.openNeighbors = function(tile){
      tile.neighbors.forEach(function(neighbor) {
        $scope.showTile(neighbor);
      });
    };

});
