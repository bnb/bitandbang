#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double-single'
}
// Text + chalk definitions
let data = {
  'name': chalk.white.bold('Carlos Azaustre'),
  'handle': chalk.yellow('@carlosazaustre'),
  'work': chalk.white('👨🏻‍💻 Senior Frontend Developer @ IBM Research \n🎓 BSc in Telematics Engineering'),
  'twitter': chalk.yellow('https://twitter.com/carlosazaustre'),
  'github': chalk.yellow('https://github.com/carlosazaustre'),
  'linkedin': chalk.yellow('https://linkedin.com/in/carlosazaustre'),
  'web': chalk.yellow('https://carlosazaustre.es'),
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
let output = heading + newline +
  working + newline + newline +
  twittering + newline +
  githubing + newline +
  linkedining + newline +
  webing + newline + newline +
  carding

console.log(chalk.yellow(boxen(output, options)))
