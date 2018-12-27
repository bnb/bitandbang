'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')
const asciify = require('asciify-image')
const Table = require('cli-table3')

// Define options for Boxen
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           Alexander Cano'),
  handle: chalk.white('Geektimus'),
  work: chalk.white('Software Engineer at Klarna'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('geektimus'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~geektimus'),
  github: chalk.gray('https://github.com/') + chalk.green('geektimus'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('geektimus'),
  web: chalk.cyan('https://geektimus.me'),
  npx: chalk.red('npx') + ' ' + chalk.white('@geektimus/card'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelNPM: chalk.white.bold('     NPM:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelNPM}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Define options for Asciify
const asciiOptions = {
  fit: 'box',
  width: '30%'
}

const getAvatar = async imageName => {
  try {
    const image = path.join(__dirname, 'resources', imageName)
    return await asciify(image, asciiOptions)
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

async function getOutput() {
  const imageName = 'avatar.jpg'
  const avatar = await getAvatar(imageName)

  // Put all our output together into a single variable so we can use boxen effectively
  const output =
    heading + // data.name + data.handle
    newline.repeat(2) +
    working + // data.labelWork + data.work
    newline.repeat(2) +
    twittering + // data.labelTwitter + data.twitter
    newline +
    npming + // data.labelnpm + data.npm
    newline +
    githubing + // data.labelGitHub + data.github
    newline +
    linkedining + // data.labelLinkedIn + data.linkedin
    newline +
    webing +
    newline.repeat(2) +
    carding // data.labelCard + data.npx

  const table = new Table()
  table.push([avatar, { content: output, vAlign: 'center' }])

  const card = table.toString()
  fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(card, boxenOptions)))
}

getOutput()
