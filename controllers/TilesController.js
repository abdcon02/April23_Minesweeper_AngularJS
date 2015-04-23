mineSweeper.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory) {
    $scope.tiles = TilesFactory.tiles;

    $scope.rowLength = TilesFactory.rowLength;

    console.log($scope.rowLength);

    $scope.showObject = function(tile) {
        console.log(tile);
    }

});
