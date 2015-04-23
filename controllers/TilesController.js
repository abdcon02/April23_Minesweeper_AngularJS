mineSweeper.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory) {
    $scope.tiles = TilesFactory.tiles;
    console.log($scope.tiles);

});
