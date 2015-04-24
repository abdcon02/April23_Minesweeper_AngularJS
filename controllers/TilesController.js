mineSweeper.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory) {
    $scope.tiles = TilesFactory.tiles;

    $scope.tileContainer = {
        "width": "80px",
        "height": "80px",
        "margin": "0 auto"
    };

    $scope.rowLength = TilesFactory.rowLength;

    $scope.showTile = function(tile) {

      tile.show = true;
      console.log(tile);
    };

});
