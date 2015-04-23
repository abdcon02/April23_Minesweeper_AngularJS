mineSweeper.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory) {
    $scope.tiles = TilesFactory.tiles;

    $scope.rowLength = TilesFactory.rowLength;

    $scope.showTile = function(tile) {
        tile.show = true;
        console.log(tile);
    };

});
