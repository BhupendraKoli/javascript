let marks = prompt("Enter your marks");
marks = Number.parseInt(marks);
if (marks < 25 && marks >= 0) {
  console.log("\n Your grade is F.");
}
else if (marks >= 25 && marks < 45) {
  console.log("\n Your grade is E.");
}
else if (marks >= 45 && marks < 50) {
  console.log("\n Your grade is D.");
}
else if (marks >= 50 && marks < 60) {
  console.log("\n Your grade is C.");
}
else if (marks >= 60 && marks < 80) {
  console.log("\n Your grade is B.");
}
else if (marks >= 80 && marks <= 100) {
  console.log("\n Your grade is A.");
}
else {
  console.log("\n Invalid Input.");
}