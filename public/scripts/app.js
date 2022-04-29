// Client facing scripts here
function generateRandomString(inp) {
  const check = inp;
  const potentialChars = "abcdefghijklmnopqrstuvwxyz1234567890";
  let str = "";
  const max = potentialChars.length;
  while (inp > 0) {
    let spot = Math.floor(Math.random() * max);
    str += potentialChars[spot];
    inp--;
  }
  return (check > 0 ? str : "Invalid string length");
}

module.exports = { generateRandomString };