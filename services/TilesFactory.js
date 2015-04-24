mineSweeper.factory('TilesFactory', function TilesFactory() {
  var factory = {};
  factory.tiles = [];
  factory.tileNumber = 0;
  factory.rowLength = 0;
  factory.colLength = 0;

  // Generate some unique random numbers so we can assign bombs to random tiles
  factory.createBoard = function(width, height) {

    factory.tiles = [];
    factory.rowLength = height;
    factory.colLength = width;
    factory.tileNumber = width * height;

    // Create tileNumber amount of tiles
    for (var i = 0; i < factory.tileNumber; i++) {
      var colVal = (i % width) + 1;
      var rowVal = Math.floor(i / width) + 1;

      var tile = {
        bomb: false,
        show: false,
        flagged: false,
        clue: 0,
        id: i,
        col: colVal,
        row: rowVal,
        neighbors: [],
      };
      factory.tiles.push(tile);
    }
  };

  factory.makeBombs = function(difficulty) {

    //stores our bomb numbers
    var randomNumbers = [];

    //keep adding numbers until the array's length is > difficulty level
    while(randomNumbers.length < Math.round((this.tileNumber * difficulty)))
    {
      //create a random number between 0 and tileNumber
      var randomnumber = Math.floor(Math.random() * factory.tileNumber);
      var found = false;
      //if we have that number already make a new one
      for(var i = 0; i < randomNumbers.length; i++ ) {
        if(randomNumbers[i] == randomnumber) {
          found = true;
          break;
        }
      }
      if(!found) randomNumbers[randomNumbers.length] = randomnumber;
    };

    //for each number in the array change that id to be a bomb
    for(var i = 0; i < randomNumbers.length; i++) {
      factory.tiles[randomNumbers[i]].bomb = true;
    }
  };

  // set the clue number based on surrounding bombs
  factory.createNeighborsAndClues = function() {

    factory.tiles.forEach(function(tile, index, arr) {

      //if we have a row above us
      if(tile.row - 1 !== 0 ) {
        //add it as a neighbor
        tile.neighbors.push(arr[index - factory.rowLength]);
        //check it for a bomb
        if(arr[index - factory.rowLength].bomb) {
          tile.clue++;
        }

        //check for a column to the left
        if(tile.col - 1 !== 0) {
          tile.neighbors.push(arr[index - factory.rowLength - 1]);
          //if it exists check for a bomb
          if(arr[index - factory.rowLength - 1].bomb) {
            tile.clue++;
          }
        }

        //check for a column to the right
        if(tile.col + 1 !== factory.colLength + 1) {
          tile.neighbors.push(arr[index - factory.rowLength + 1]);
          //if it exists check for a bomb
          if(arr[index - factory.rowLength + 1].bomb) {
            tile.clue++;
          }
        }
      }
      //if we have a row below us
      if(tile.row + 1 !== factory.rowLength + 1) {
        tile.neighbors.push(arr[index + factory.rowLength]);
        //we know the one below us exists so check for bomb
        if(arr[index + factory.rowLength].bomb) {
          tile.clue++;
        }

        //check for column below to the left
        if(tile.col - 1 !== 0) {
          tile.neighbors.push(arr[index + factory.rowLength - 1]);
          if(arr[index + factory.rowLength - 1].bomb) {
            tile.clue++;
          }
        }
        //check for col below right
        if(tile.col + 1 !== factory.colLength + 1) {
          tile.neighbors.push(arr[index + factory.rowLength + 1]);
          if(arr[index + factory.rowLength + 1].bomb) {
            tile.clue++;
          }
        }
      }
      //if we have a col to the left of us
      if(tile.col - 1 !== 0) {
        tile.neighbors.push(arr[index - 1]);
        //we have one to the left
        if(arr[index - 1].bomb) {
          tile.clue++;
        }
      }
      //if col is to the right
      if(tile.col + 1 !== factory.colLength + 1) {
        tile.neighbors.push(arr[index + 1]);
        //we have col to the right
        if(arr[index + 1].bomb) {
          tile.clue++;
        }
      }

    });

    this.tiles.forEach(function(tile) {
      if(tile.clue === 0) {
        // tile.clue = ;
      }

      if(tile.bomb) {
        tile.clue = 'B';
      }

    });

  };


  return factory;
})
