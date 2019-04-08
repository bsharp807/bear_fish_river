const River = function(name, fish = []){
  this.name = name;
  this.fish = fish;
};
River.prototype.loseFish = function (fish) {
  this.fish.splice(this.fish.indexOf(fish),1);
};
River.prototype.fishCount = function () {
  return this.fish.length;
};
River.prototype.birthFish = function (newFish) {
  this.fish.push(newFish);
};

module.exports = River;
