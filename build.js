"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

// Text + chalk definitions
const data = {
  name: chalk.white("                   David R. Poindexter"),
  handle: chalk.white("drpoindexter"),
  work: chalk.white("AWS Cloud Practice Lead at CleanSlate Technology Group"),
  altTables: chalk.white("Sanitize Those Inputs "),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("drpoindexter"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~drpoindexter"),
  github: chalk.gray("https://github.com/") + chalk.green("mtheoryx"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("drpoindexter"),
  twitch: chalk.gray("https://www.twitch.tv/") + chalk.magenta("roberttables"),
  web: chalk.cyan("https://drp3.me"),
  npx: chalk.red("npx") + " " + chalk.white("drpoindexter"),
  labelWork: chalk.white.bold("         Work 💻:"),
  labelTables: chalk.white.bold("Robert Tables 😈:"),
  labelTwitter: chalk.white.bold("      Twitter 🐦:"),
  labelnpm: chalk.white.bold("          npm 📦:"),
  labelGitHub: chalk.white.bold("       GitHub 🐙:"),
  labelLinkedIn: chalk.white.bold("     LinkedIn 🔗:"),
  labelTwitch: chalk.white.bold("       Twitch 🎥: "),
  labelWeb: chalk.white.bold("          Web 🌐:"),
  labelCard: chalk.white.bold("         Card 📇:")
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const injecting = `${data.labelTables}  ${data.altTables}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const twitching = `${data.labelTwitch} ${data.twitch}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  injecting +
  newline +
  newline + // data.labelOpenSource + data.opensource
  twittering +
  newline + // data.labelTwitter + data.twitter
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  twitching +
  newline + // data.labelLinkedIn + data.linkedin
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.magenta(boxen(output, options))
);
