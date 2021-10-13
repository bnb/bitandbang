#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white(`Ste O'Neill /`),
  handle: chalk.cyan("stecodes"),
  work: chalk.white(
    "Software Developer @ Sky && Founder @ Little Boat Digital"
  ),
  lookingForWork: chalk.cyan("I'm looking for freelance work!"),
  twitter: chalk.cyan("https://twitter.com/stecodes"),
  github: chalk.cyan("https://github.com/steoneill"),
  linkedin: chalk.cyan("https://linkedin.com/in/steoneill"),
  web: chalk.cyan("https://steoneill.dev"),
  npx: chalk.white("npx ste"),
  labelWork: chalk.white.bold("      Work:"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelWeb: chalk.white.bold("       Web:"),
  labelCard: chalk.white.bold("      Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const work = `${data.lookingForWork}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  lookingForWork + 
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
