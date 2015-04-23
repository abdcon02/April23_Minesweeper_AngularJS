mineSweeper.factory('TilesFactory', function TilesFactory() {
    var factory = {};
    factory.tiles = [];
    factory.rowLength = 4;
    var tileNumber = 16;

// Generate some unique random numbers so we can assign bombs to random tiles

    var randomNumbers = [];
    while(randomNumbers.length < Math.round((tileNumber * 0.15))){
      var randomnumber = Math.ceil(Math.random()*tileNumber)
      var found=false;
      for(var i = 0; i < randomNumbers.length; i++ ){
        if(randomNumbers[i] == randomnumber){found = true; break}
      }
      if(!found) randomNumbers[randomNumbers.length] = randomnumber;
    };

// Create tileNumber amount of tiles and tiles with tile.bomb = true where tile.id is in randomNumbers

    for (var i = 0; i < tileNumber; i++){
        var colVal = (i % factory.rowLength) + 1;
        var rowVal = Math.floor(i / factory.rowLength) + 1;

        var tile = { bomb: false,
                     show: false,
                     clue: 0,
                     id: i,
                     col: colVal,
                     row: rowVal
                   };

        if(randomNumbers.indexOf(tile.id) !== -1) {
            tile.bomb = true;
        }

        factory.tiles.push(tile);
    };



    debugger;
    return factory;
})
