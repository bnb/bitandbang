#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk')

// Text + chalk definitions
let data = {
  'name': chalk.white.bold('👋 Hi! I\'m Carlos Azaustre'),
  'handle': chalk.hex('#D15C22#')('@carlosazaustre'),
  'work': chalk.white('💻 Senior Front-End Engineer @ Eventbrite \n 🎓 BSc, Telematics Engineering'),
  'twitter': chalk.hex('#D15C22')('https://twitter.com/carlosazaustre'),
  'github': chalk.hex('#D15C22')('https://github.com/carlosazaustre'),
  'linkedin': chalk.hex('#D15C22')('https://linkedin.com/in/carlosazaustre'),
  'web': chalk.hex('#D15C22')('https://carlosazaustre.es'),
  'npx': chalk.white('npx carlosazaustre'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} (${data.handle})`
var working = `${data.work}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
var webing = `${data.labelWeb}  ${data.web}`
var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = newline + heading + newline + newline +
  working + newline + newline +
  twittering + newline +
  githubing + newline +
  linkedining + newline +
  webing + newline + newline +
  carding + newline

console.log(output)
