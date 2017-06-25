let basic = require("./basiccard.js");
let cloze = require("./clozecard.js");
let colors = require("colors");

let bcard = new basic.BasicCard("Who was the first president \nof the United States.", "George Washington");
let ccard = new cloze.ClozeCard("George Washington \nwas the first president \nof the United States.", "George Washington");



console.log("-----------------------------".yellow);
console.log('|                           |'.yellow);
console.log("| ".yellow + ccard.partial.green + "       |".yellow);
console.log('|                           |'.yellow);
console.log("-----------------------------".yellow);
console.log('');
console.log("-----------------------------".yellow);
console.log('|                           |'.yellow);
console.log("| ".yellow + ccard.cloze.green + "  	    |".yellow);
console.log('|                           |'.yellow);
console.log("-----------------------------".yellow);
console.log('');
console.log("-----------------------------".yellow);
console.log('|                           |'.yellow);
console.log("| ".yellow + ccard.fullText.green + "       |".yellow);
console.log('|                           |'.yellow);
console.log("-----------------------------".yellow);
console.log('');
console.log("-----------------------------".yellow);
console.log('|                           |'.yellow);
console.log("| ".yellow + bcard.front.green + "       |".yellow);
console.log('|                           |'.yellow);
console.log("-----------------------------".yellow);
console.log('');
console.log("-----------------------------".yellow);
console.log('|                           |'.yellow);
console.log("| ".yellow + bcard.back.green + "         |".yellow);
console.log('|                           |'.yellow);
console.log("-----------------------------".yellow);