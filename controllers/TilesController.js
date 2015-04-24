mineSweeper.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory) {

    $scope.difficulty = 0.15;

    $scope.tileContainer = {};

    $scope.showTile = function(tile) {
      // first check if tile clicked is a bomb
      if(tile.bomb){
        //show it and end the game
        tile.show = true;
        alert("LOSER");

      } else { //if not a bomb

        //check if the tile is 0 and it isn't showing
        if (tile.clue === 0 && tile.show === false){

          //show it and show it's neighbors that haven't been shown yet
          tile.show = true;
          $scope.openNeighbors(tile);

        } else { //if it's not 0 just show the tile
          tile.show = true;
        }
      }
      console.log(tile);
    };

    $scope.hi = function() {
      alert("Hi!");
    };

    $scope.startGame = function() {
      TilesFactory.createBoard(10, 10);
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
