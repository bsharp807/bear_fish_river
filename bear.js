const Bear = function(name, type, river, stomach = []){
  this.name = name;
  this.type = type;
  this.stomach = stomach;
  this.river = river;
};
Bear.prototype.bearRoar = function () {
  return 'RAARRR'
};
Bear.prototype.foodCount = function() {
  return this.stomach.length;
};
Bear.prototype.eatFish = function (fish) {
  this.river.loseFish(fish);
  this.stomach.push(fish);
};

module.exports = Bear;
