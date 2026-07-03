const library = [
  {
    title: "Bill Gates",
    author: "The road Ahed",
    readingStatus: true,
  },

  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay",
    author: "Suzane Collins",
    readingStatus: false,
  },
];

for (var i = 0; i < library.length; i++) {
  const book = "'" + library[i].title + "'" + "by" + library[i].author + ".";
  if (library[i].readingStatus) {
    console.log("Already read " + book);
  } else {
    console.log("you still need to read" + book);
  }
}
