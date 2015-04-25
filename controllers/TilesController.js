mineSweeper.controller('TilesCtrl', function TilesCtrl($scope, $interval, TilesFactory) {

    $scope.difficulty = 0.15;
    $scope.gameOver = false;
    $scope.timeElapsed = 0;

    $scope.tileContainer = {};


    $scope.showTile = function(tile) {

      //is the game not over and is the tile not flagged as a bomb
      if(!$scope.gameOver && !tile.flagged) {
        // first check if tile clicked is a bomb
        if(tile.bomb){
          //show it and every other bomb and end the game
          $scope.endGame();

        } else { //if not a bomb

          var count = 0;
          //recalculate our bombs shown
          $scope.tiles.forEach(function(tile) {
            if(!tile.show) {
              count++;
            }
          });
          $scope.totalShow = count;
          //check if the tile is 0 and it isn't showing
          if (tile.clue === 0 && tile.show === false){

            //show it and show it's neighbors that haven't been shown yet
            tile.show = true;
            $scope.totalShow--;
            $scope.openNeighbors(tile);

          } else { //if it's not 0 just show the tile
            tile.show = true;
            $scope.totalShow--;
          }
        }
        console.log(tile);
      }
    };

    $scope.flagTile = function(tile) {
      if(!$scope.gameOver) {

        if(tile.flagged) {
          tile.flagged = false;
          $scope.bombNumber++;
        } else {
          tile.flagged = true;
          $scope.bombNumber--;
        }

        console.log(tile.flagged);
      }
    };

    $scope.startGame = function() {
      $scope.gameOver = false;
      $scope.timeElapsed = 0;
      TilesFactory.createBoard(10, 10);
      TilesFactory.makeBombs($scope.difficulty);
      TilesFactory.createNeighborsAndClues();
      $scope.tiles = TilesFactory.tiles;
      $scope.bombNumber = TilesFactory.bombNumber;
      $scope.totalShow = TilesFactory.tileNumber;

      console.log($scope.totalShow);

      $scope.tileContainer = {
          "width": TilesFactory.colLength * 20 + "px",
          "height": TilesFactory.rowLength * 20 + "px",
          "margin": "0 auto",
          "border": "2px solid black",
      };

      //check if timer is defined
      if(angular.isDefined($scope.timer)) {
        $interval.cancel($scope.timer);
        $scope.timer = undefined;
      }
      //start the timer
      $scope.timer = $interval(function() {$scope.timeElapsed++;}, 1000);

    };

    $scope.openNeighbors = function(tile){
      tile.neighbors.forEach(function(neighbor) {
        $scope.showTile(neighbor);
      });
    };

    $scope.endGame = function() {
      $scope.gameOver = true;
      $scope.tiles.forEach(function(tile) {
        if(tile.bomb) {
          tile.show = true;
        };
      });
    };

    $scope.isGameOver = function(item) {
      if($scope.gameOver && item.bomb) {
        return true;
      }
    };

});
