'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// DateTime Stuff

const dateCalculator = {
  dateDifference: function dateDifference (date) {
    let difference = new Date().getTime() - new Date(date).getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  }
}

const dates = {
  updateDate: new Date('07/01/2023')
}

// Text + chalk definitions
const data = {
  name: chalk.white('           🐝 / Jarret Bryan'),
  handle: chalk.white('jaybeekeeper'),
  work: chalk.white('Creative Technologist + Software Engineer at Unite Us'),
  bsky: chalk.gray('https://bsky.app/profile/') + chalk.cyan('jaybeekeeper.bsky.social'),
  mastodon: chalk.gray('https://mastodon.social/') + chalk.magenta('@jaybeekeeper'),
  github: chalk.gray('https://github.com/') + chalk.green('jarretbryan'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('jarretbryan'),
  web: chalk.cyan('https://jarretbryan.online'),
  npx: chalk.red('npx') + ' ' + chalk.white('jaybeecard'),
  dates: chalk.blue.bold(`    Last Updated ${dateCalculator.dateDifference(dates.updateDate)} days ago.`),
  labelWork: chalk.white.bold('    Work:'),
  labelBsky: chalk.white.bold(' Bluesky:'),
  labelMastodon: chalk.white.bold('Mastodon:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:'),

}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle} `
const working = `${data.labelWork}  ${data.work}`
const bskying = `${data.labelBsky}  ${data.bsky}`
const mastodoning = `${data.labelMastodon}  ${data.mastodon}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`
const dating = `${data.dates}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               bskying + newline + // data.labelTwitter + data.twitter
               mastodoning + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding + newline + newline + // data.labelCard + data.npx
               dating 


fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
