mineSweeper.factory('TilesFactory', function TilesFactory() {
    var factory = {};
    factory.tiles = [];
    rowLength = 4;

    for (var tileNumber = 15; tileNumber >= 0; tileNumber --){

        var colVal = (tileNumber % rowLength) + 1;
        var rowVal = Math.floor(tileNumber / rowLength) + 1;

        var tile = { bomb: false,
                     show: false,
                     clue: 0,
                     id: tileNumber,
                     col: colVal,
                     row: rowVal
                   };
        factory.tiles.push(tile);
    };



    return factory;
})
