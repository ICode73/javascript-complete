/*


SWITCH STATEMENTS


*/

const day = "tuesday";
// * this is a strict comparison
switch (day) {
  case "monday": // day === monday
    console.log("plan course structure");
    console.log("go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend :D");
    break;
  default:
    console.log("not a valid day!");
}

if (day === "monday") {
  console.log("plan course structure...");
  console.log("go to coding meetup...");
} else if (day === "tuesday") {
  console.log("prepare theory videos...");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples...");
} else if (day === "friday") {
  console.log("record videos...");
} else if (day === "saturday" || day === "sunday") {
  console.log("enjoy the weekend...");
} else {
  ("not a valid day!...");
}
