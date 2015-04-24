mineSweeper.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory) {
    $scope.tiles = TilesFactory.tiles;

    $scope.tileContainer = {
        "width": TilesFactory.rowLength * 20 + "px",
        "height": TilesFactory.rowLength * 20 + "px",
        "margin": "0 auto"
    };

    $scope.rowLength = TilesFactory.rowLength;

    $scope.showTile = function(tile) {

      tile.show = true;
      console.log(tile);
    };

});
