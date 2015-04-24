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
            tile.clue = "B";
        }

  // push each tile into the factory tile array

        factory.tiles.push(tile);
    };

  // set the clue number based on surrounding bombs

  factory.tiles.forEach(function(tile, index, arr) {

    //if we have a row above us
    if(tile.row - 1 !== 0 ) {
      //right above will exist and we check for a bomb
      if(arr[tile.id - factory.rowLength].bomb) {
        tile.clue++;
      }

      //check for a column to the left
      if(tile.col - 1 !== 0) {
        //if it exists check for a bomb
        if(arr[tile.id - factory.rowLength - 1].bomb) {
          tile.clue++;
        }
      }

      //check for a column to the right
      if(tile.col + 1 !== 5) {
        //if it exists check for a bomb
        if(arr[tile.id - factory.rowLength + 1].bomb) {
          tile.clue++;
        }
      }
    }
    //if we have a row below us
    if(tile.row + 1 !== 5) {
      //we know the one below us exists so check for bomb
      if(arr[tile.id + factory.rowLength].bomb) {
        tile.clue++;
      }

      //check for column below to the left
      if(tile.col - 1 !== 0) {
        if(arr[tile.id + factory.rowLength - 1].bomb) {
          tile.clue++;
        }
      }
      //check for col below right
      if(tile.col + 1 !== 5) {
        if(arr[tile.id + factory.rowLength + 1].bomb) {
          tile.clue++;
        }
      }
    }
    //if we have a col to the left of us
    if(tile.col - 1 !== 0) {
      //we have one to the left
      if(arr[tile.id - 1].bomb) {
        tile.clue++;
      }
    }
    //if col is to the right
    if(tile.col + 1 !== 5) {
      //we have col to the right
      if(arr[tile.id + 1].bomb) {
        tile.clue++;
      }
    }

    console.log("Clue: " + tile.clue);

  });

    return factory;
})
