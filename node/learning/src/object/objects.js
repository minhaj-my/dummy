const animal = {
  talk: function () {
    console.log("noise");
  },
};
const dog = Object.create(animal);
dog.talk = function () {
  console.log("woof");
};
console.log(dog);
