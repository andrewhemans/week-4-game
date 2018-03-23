// Create an array object of characters they can choose from.
  // health power
  // hit power
  var heroes = {
    terra : {
      name: "Terra",
      health: 200,
      hitPower: 60,
      src: "assets/images/terra/action.gif",
      dead: "assets/images/terra/dead.gif",
      wounded: "assets/images/terra/wounded.gif",
      victory: "assets/images/terra/victory.gif",
    },
    locke : {
      name: "Locke",
      health: 150,
      hitPower: 40,
      src: "assets/images/locke/action.gif",
      dead: "assets/images/locke/dead.gif",
      wounded: "assets/images/locke/wounded.gif",
    },
    celes : {
      name: "Celes",
      health: 160,
      hitPower: 50,
      src: "assets/images/celes/action.gif",
      dead: "assets/images/celes/dead.gif",
      wounded: "assets/images/celes/wounded.gif",
    },
    mog : {
      name: "mog",
      health: 100,
      hitPower: 30,
      src: "assets/images/mog/action.gif",
      dead: "assets/images/mog/dead.gif",
      wounded: "assets/images/mog/wounded.gif",
    }
  };

// Create enemy characters
  // health power
  // hit power
  var enemies = {
    kefka : {
      name: "Kefka",
      health: 200,
      hitPower: 50,
      src: "assets/images/kefka/enemy.gif",
    },
    ultros : {
      name: "Ultros",
      health: 120,
      hitPower: 30,
      src: "assets/images/ultros/enemy.gif",
    },
    dragon : {
      name: "Dragon",
      health: 100,
      hitPower: 15,
      src: "assets/images/dragon/enemy.gif",
    },
    atma : {
      name: "Atma",
      health: 160,
      hitPower: 40,
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
  var playerDead = player.dead;
  var playerWin = player.victory;

  // console.log(playerDead);

// Player chooses enemy
  var enemy = enemies.ultros;
  var enemyMaxHit = enemy.hitPower;
  var enemyMinHit = enemy.hitPower - 20;
  var enemyHealth = enemy.health;
  var enemyHit = null;
  var enemyImage = enemy.src;


function removeEnemy() {
  var remove = "#" + enemy.name.toLowerCase();
  var parent = $( remove ).parent();
  $( remove ).remove();
  $( parent ).remove();
  console.log(enemies);
}

//write the character stats to home screen
for (var key in heroes) {
  var value = heroes[key];
  var keyString = "#" + key.toString();

  var healthVal = value.health;
  var strengthVal = value.hitPower;

  $(".health", keyString).html("<h1>Health:" + healthVal + "</h1>");
  $(".strength", keyString).html("<h1>strength:" + strengthVal + "</h1>");
}

// console.log(keyVal);

// hide character screen
function hideCharacters() {
  $("#heroes").css({"display":"none"});
  $("#enemies").css({"display":"flex"});
}

function hideEnemies() {
  $("#enemies").css({"display":"none"});
  $("#battle").css({"display":"inherit"});
}

function nextFight() {
  $("#battle").css({"display":"none"});
  $("#enemies").css({"display":"flex"});
}

function youLose() {
  $("#battle").css({"display":"none"});
  $("#loss").css({"display":"flex"});
  $("#sprite-div").html("<img src='" + playerDead + "' id='loss-sprite'>");
}

function youWin() {
  $("#enemies").css({"display":"none"});
  $("#loss").css({"display":"flex"});
  $("#sprite-div").html("<img src='" + playerWin + "' id='loss-sprite'>");
}

//play again
function playAgain() {
  location.reload();
}

$("#sprite-div").click(function() {
  playAgain();
});

// select character
$( ".player-image" ).click(function() {
  var id = $( this ).attr("id");
  player = heroes[id];

  // reset player stats
  playerMaxHit = player.hitPower;
  playerMinHit = player.hitPower - 10;
  playerHealth = player.health;
  playerDead = player.dead;

  hideCharacters();
  playerImage = player.src;
  $( "#player-sprite" ).attr( "src", playerImage );
  //changes header text
  $("#header-text").text("Choose An Opponent");
  });


// select enemy

$( ".enemy-image" ).click(function() {
  var id = $( this ).attr("id");
  enemy = enemies[id];

  // resets enemy stats
  enemyMaxHit = enemy.hitPower;
  enemyMinHit = enemy.hitPower - 10;
  enemyHealth = enemy.health;

  hideEnemies();
  enemyImage = enemy.src;
  $( "#enemy-sprite" ).attr( "src", enemyImage );

  //set up scores
  scoreBoard();

  //changes header text
  $("#header-text").text("Battle!");
  });

//logs scores
function scoreBoard() {
  $("#enemy-score").html("<p>Health: " + enemyHealth + "</p><p>Strength: " + enemyMaxHit + "</p>");
  $("#hero-score").html("<p>Health: " + playerHealth + "</p><p>Strength: " + playerMaxHit + "</p>");
}



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

  // $( "#button" ).click(function() {
  //
  // });

  $( "#attack-button" ).click(function() {
    attack();
    // playerMaxHit = playerMaxHit + 5;
    winLose();
    scoreBoard();
  });



  // if players health raches zero, player loses
  function winLose() {
    if (playerHealth <= 0) {
      console.log("you lose :(");
      youLose();
      //changes header text
      $("#header-text").text("You Lost");
    } else if (enemyHealth <= 0 && playerHealth >= 1) { // if enemy health reached zero, player wins
      console.log("you Win!");
      playerMaxHit = playerMaxHit + 10;
      playerHealth = playerHealth * 1.5;
      removeEnemy();
      nextFight();
      console.log(playerMaxHit);
      //changes header text
      // $("#header-text").text("You Win!");
    }
    if ( $('.choose-enemy').children().length <= 0 ) {
     // do something
     youWin();
     $("#header-text").text("You Win!");
    }
  }





// log wins and losses

//fun
  // $( "#enemy-sprite" ).effect( "shake" );
  // $( "#enemy-sprite" ).fadeOut( 4000, "linear");
  // console.log(player);
  // console.log(enemy);
