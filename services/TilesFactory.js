mineSweeper.factory('TilesFactory', function TilesFactory() {
    var factory = {};
    factory.tiles = [];
    factory.rowLength = 4;
    var tileNumber = 0;

    for (tileNumber; tileNumber <= 15; tileNumber++){

        var colVal = (tileNumber % factory.rowLength) + 1;
        var rowVal = Math.floor(tileNumber / factory.rowLength) + 1;

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
