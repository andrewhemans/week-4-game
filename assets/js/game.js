// Create an array object of characters they can choose from.
  // health power
  // hit power
  var heroes = {
    terra : {
      name: "Terra",
      health: 100,
      hitPower: 20,
      src: "assets/images/terra/action.gif",
    },
    locke : {
      name: "Locke",
      health: 100,
      hitPower: 20,
      src: "assets/images/locke/action.gif",
    },
    celes : {
      name: "Celes",
      health: 100,
      hitPower: 20,
      src: "assets/images/celes/action.gif",
    },
    mog : {
      name: "mog",
      health: 100,
      hitPower: 20,
      src: "assets/images/mog/action.gif",
    }
  };

// Create enemy characters
  // health power
  // hit power
  var enemies = {
    kefka : {
      name: "Kefka",
      health: 100,
      hitPower: 20,
      src: "assets/images/kefka/enemy.gif",
    },
    ultros : {
      name: "Ultros",
      health: 100,
      hitPower: 20,
      src: "assets/images/ultros/enemy.gif",
    },
    dragon : {
      name: "Dragon",
      health: 100,
      hitPower: 20,
      src: "assets/images/dragon/enemy.gif",
    },
    atma : {
      name: "Atma Weapon",
      health: 100,
      hitPower: 20,
      src: "assets/images/atma/enemy.gif",
    }
  };


// Player chooses character
  var player = heroes.terra;
  var playerMaxHit = player.hitPower;
  var playerMinHit = player.hitPower - 10;
  var playerHealth = player.health;
  var playerHit = null;
  var playerImage = player.src;

// Player chooses enemy
  var enemy = enemies.ultros;
  var enemyMaxHit = enemy.hitPower;
  var enemyMinHit = enemy.hitPower - 10;
  var enemyHealth = enemy.health;
  var enemyHit = null;
  var enemyImage = enemy.src;




// hide character screen
function hideCharacters() {
  $("#heroes").css({"display":"none"});
  $("#enemies").css({"display":"flex"});
}

function hideEnemies() {
  $("#enemies").css({"display":"none"});
  $("#battle").css({"display":"inherit"});
}

// select character
$( ".player-image" ).click(function() {
  var id = $( this ).attr("id");
  player = heroes[id];
  hideCharacters();
  playerImage = player.src;
  console.log(player);
  console.log(playerImage);
  $( "#player-sprite" ).attr( "src", playerImage );
  });
//
// $( "#terra" ).click(function() {
//     console.log("you clicked terra");
//     player = heroes.terra;
//     console.log(player);
//     hideCharacters();
//     // selectEnemy();
//   });
//
// $( "#locke" ).click(function() {
//     console.log("you clicked locke");
//     player = heroes.locke;
//     console.log(player);
//     hideCharacters();
//     // $( "#enemy-sprite" ).attr( "src", enemyImage );
//   });
//
// $( "#celes" ).click(function() {
//     console.log("you clicked celes");
//     player = heroes.celes;
//     console.log(player);
//     hideCharacters();
//   });
//
// $( "#mog" ).click(function() {
//     console.log("you clicked mog");
//     player = heroes.mog;
//     console.log(player);
//     hideCharacters();
//   });

// select enemy

$( ".enemy-image" ).click(function() {
  var id = $( this ).attr("id");
  enemy = enemies[id];
  hideEnemies();
  enemyImage = enemy.src;
  $( "#enemy-sprite" ).attr( "src", enemyImage );
  });






// Program for battles
  // for both characters calcuate possible attack
  var attack = function() {

    // choose a number between x and max hitPower
    enemyHit = Math.floor(Math.random() * (enemyMaxHit - enemyMinHit)) + enemyMinHit;
    playerHit = Math.floor(Math.random() * (playerMaxHit - playerMinHit)) + playerMinHit;

    // subtract that number from opponents health
    enemyHealth = enemyHealth - playerHit;
    playerHealth = playerHealth - enemyHit;
  }

  $( "#button" ).click(function() {
    attack();
    // playerMaxHit = playerMaxHit + 5;
    winLose();
    console.log(playerHealth);
    console.log(enemyHealth);
    // console.log(playerMaxHit);

  });




  // if players health raches zero, player loses
  function winLose() {
    if (playerHealth <= 0 && enemyHealth >= 1) {
      console.log("you lose :(");
    } else if (enemyHealth <= 0 && playerHealth >= 1) { // if enemy health reached zero, player wins
      console.log("you Win!");
    }
  }


// log wins and losses

//fun

$( "#attack-button" ).click(function() {

  // $( "#enemy-sprite" ).effect( "shake" );

  // $( "#enemy-sprite" ).fadeOut( 4000, "linear");

  console.log(player);
  console.log(enemy);

});
