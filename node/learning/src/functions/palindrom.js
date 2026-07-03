function check_Palindrome(str_entry) {
  let cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  let ccount = 0;

  // Check whether the string is empty or not
  if (cstr === "") {
    console.log("Nothing found");
    return false;
  }
  // Check if the length of the string is even or odd
  if (cstr.length % 2 === 0) {
    ccount = cstr.length / 2;
  } else {
    // if the length of the string is 1 then it becomes a palindrom
    if (cstr.length === 1) {
      console.log("Entry is a palindrom");
      return true;
    } else {
      // if the length of the strin is odd ignore middle charecter
      ccount = (cstr.length - 1) / 2;
    }
  }

  // Loop through to check the first character to the last character and then move the   next
  for (let x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do no match
    if (cstr[x] != cstr.slice(-1 - x)[0]) {
      console.log("Entry is not a  palindrom");
      return false;
    }
  }
  console.log("The entry is a  palindrom");
  return true;
}
check_Palindrome("madam");
check_Palindrome("nursesrun");
check_Palindrome("fox");
