#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
}
// Text + chalk definitions
var work = chalk.white('Senior Cloud Developer Advocate at Microsoft')
var twitter = chalk.cyan('https://twitter.com/bitandbang')
var github = chalk.cyan('https://github.com/bnb')
var linkedin = chalk.cyan('https://linkedin.com/in/bitandbang')
var site = chalk.cyan('https://bnb.im')
var npx = chalk.white('npx bitandbang')

// Actual strings we're going to output
var newline = '\n'
var heading = `${chalk.white('Tierney Cyren /')} ${chalk.cyan('bitandbang')}`
var working = `${chalk.white.bold('      Work:')}  ${work}`
var twittering = `${chalk.white.bold('   Twitter:')}  ${twitter}`
var githubing = `${chalk.white.bold('    GitHub:')}  ${github}`
var linkedining = `${chalk.white.bold('  LinkedIn:')}  ${linkedin}`
var webing = `${chalk.white.bold('       Web:')}  ${site}`
var carding = `${chalk.white.bold('      Card:')}  ${npx}`

let output = heading + newline + newline + working  + newline + twittering + newline + githubing + newline + linkedining + newline + webing  + newline  + newline + carding


console.log(chalk.green(boxen(output, options)))