var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
function dwarfRollCall(dwarves){
  var array =[];
  for (var i=0;i<dwarves.length;i++){
      array.push(i+1 + ". " + dwarves[i] + " ");
}
  return array.join("");
}

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];
function summonCaptainPlanet(planeteerCalls){
  var shout = [];
  planeteerCalls.forEach(function(planeteer) {
    planeteer = planeteer.toUpperCase() + "!";
      shout.push(planeteer);});
return shout;}

var words = ['jazz', 'horn', 'mic'];
function longPlaneteerCalls(words){
  for(var i = 0; i < words.length; i++){
  if(words[i].length > 4){
  return true;}
  }
return false
}

var food = ["caviar", "steak", "lobster"];
function findTheCheese(food){
  var cheese = ["cheddar", "bleu", "stilton"];
    for(var i=0; i < food.length; i++){
  var nose = cheese.indexOf(food[i]);
   if(nose !== -1) {
   return food[i]; }
   }
return "no cheese!";
}