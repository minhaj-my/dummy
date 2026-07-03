class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }
  addDepartment(department) {
    this.departments.push(department);
    console.log(`Department "${department}" added to ${this.name}`);
  }

  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
      console.log(`Department"${department}" remoed from the ${this.name}.`);
    } else {
      console.log(`Department "${department}"dose not exist in ${this.name}`);
    }
  }

  displayDispartments() {
    console.log(`Department in ${this.name}: `);
    if (this.departments.length === 0) {
      console.log("No departemts available");
    } else {
      this.departments.forEach((department, index) => {
        console.log(`${index + 1}.${department}`);
      });
    }
  }
}
const university = new University("ABC University");

university.displayDispartments();
university.addDepartment("Science");
university.addDepartment("Mathematics");
university.addDepartment("Physics");
university.displayDispartments();
