// Create an array object of characters they can choose from.
  // health power
  // hit power
  var heroes = {
    terra : {
      name: "Terra",
      health: 100,
      hitPower: 20,
    },
    locke : {
      name: "Locke",
      health: 100,
      hitPower: 20,
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
    },
    ultros : {
      name: "Ultros",
      health: 100,
      hitPower: 20,
    }
  };


// Player chooses character
function characterStats() {
  var player = heroes.terra;
  var playerMaxHit = player.hitPower;
  var playerMinHit = player.hitPower - 10;
  var playerHealth = player.health;
  var playerHit = null;
}
  // var player = heroes.terra;
  // var playerMaxHit = player.hitPower;
  // var playerMinHit = player.hitPower - 10;
  // var playerHealth = player.health;
  // var playerHit = null;

$( "#terra" ).click(function() {
    console.log("you clicked terra");
    player = heroes.terra;
    console.log(player);
    characterStats();
  });


// selectCharacter();


// Player chooses enemy
  var enemy = enemies.ultros;
  var enemyMaxHit = enemy.hitPower;
  var enemyMinHit = enemy.hitPower - 10;
  var enemyHealth = enemy.health;
  var enemyHit = null;


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
