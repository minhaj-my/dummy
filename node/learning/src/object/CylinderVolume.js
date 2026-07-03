function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Vloume = function () {
  const radius = this.cyl_diameter / 2;
  return this.cyl_height * Math.PI * radius * radius;
};

const cyl = new Cylinder(7, 4);

console.log("volume = " + cyl.Vloume().toFixed(4));
