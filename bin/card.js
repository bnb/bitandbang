#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const COLOR_THEME = '#ffb300';

// Text + chalk definitions
let data = {
  'name': chalk.white.bold('👋 Hi! I\'m Carlos Azaustre'),
  'handle': chalk.hex(COLOR_THEME)('@carlosazaustre'),
  'work': chalk.white('💻 Web Development Instructor @ Fullstack JS Academy\n🎓 BSc, Telematics Engineering\n🏅 GDE in Web Technologies'),
  'instagram': chalk.hex(COLOR_THEME)('https://instagram.com/carlosazaustre'),
  'youtube': chalk.hex(COLOR_THEME)('https://youtube.com/carlosazaustre'),
  'twitch': chalk.hex(COLOR_THEME)('https://twitch.tv/carlosazaustre'),
  'twitter': chalk.hex(COLOR_THEME)('https://twitter.com/carlosazaustre'),
  'github': chalk.hex(COLOR_THEME)('https://github.com/carlosazaustre'),
  'linkedin': chalk.hex(COLOR_THEME)('https://linkedin.com/in/carlosazaustre'),
  'web': chalk.hex(COLOR_THEME)('https://carlosazaustre.es'),
  'npx': chalk.white('npx carlosazaustre'),
  'labelInstagram': chalk.white.bold('   Instagram:'),
  'labelYoutube': chalk.white.bold('     YouTube:'),
  'labelTwitch': chalk.white.bold('      Twitch:'),
  'labelTwitter': chalk.white.bold('     Twitter:'),
  'labelGitHub': chalk.white.bold('      GitHub:'),
  'labelLinkedIn': chalk.white.bold('    LinkedIn:'),
  'labelWeb': chalk.white.bold('         Web:'),
  'labelCard': chalk.white.bold('        Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} (${data.handle})`
var working = `${data.work}`
var instagraming = `${data.labelInstagram}  ${data.instagram}`
var youtubeing = `${data.labelYoutube}  ${data.youtube}`
var twitching = `${data.labelTwitch}  ${data.twitch}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
var webing = `${data.labelWeb}  ${data.web}`
var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = newline + heading + newline + newline +
  working + newline + newline +
  instagraming + newline +
  youtubeing + newline +
  twitching + newline +
  twittering + newline +
  githubing + newline +
  linkedining + newline +
  webing + newline + newline +
  carding + newline

console.log(output)
