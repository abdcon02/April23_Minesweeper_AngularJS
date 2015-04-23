mineSweeper.factory('TilesFactory', function TilesFactory() {
    var factory = {};
    factory.tiles = [];
    factory.rowLength = 4;
    var tileNumber = 16;

// Generate some unique random numbers so we can assign bombs to random tiles

    var randomNumbers = [];
    while(randomNumbers.length < Math.round((tileNumber * 0.15))){
      var randomnumber = Math.floor(Math.random()*tileNumber);
      var found = false;
      for(var i = 0; i < randomNumbers.length; i++ ){
        if(randomNumbers[i] == randomnumber){found = true; break}
      }
      if(!found) randomNumbers[randomNumbers.length] = randomnumber;
    };

// Create tileNumber amount of tiles

    for (var i = 0; i < tileNumber; i++){
        var colVal = (i % factory.rowLength) + 1;
        var rowVal = Math.floor(i / factory.rowLength) + 1;

        var tile = { bomb: false,
                     show: false,
                     clue: 0,
                     id: i,
                     col: colVal,
                     row: rowVal,
                     invisible: null
                   };

  //  tiles with tile.bomb = true where tile.id is in randomNumbers

        if(randomNumbers.indexOf(tile.id) !== -1) {
            tile.bomb = true;
        }

  // push each tile into the factory tile array

        factory.tiles.push(tile);
    };

  // set the clue number based on surrounding bombs

  factory.tiles.forEach(function(tile) {
    console.log("Row: " + tile.row + " Col: " + tile.col);

  });

    return factory;
})
