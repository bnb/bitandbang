// Pull in our modules
const { white, gray, cyan, red, magenta, green, blue } = require('chalk')
const boxen = require('boxen')
const { writeFileSync } = require('node:fs')
const { join } = require('node:path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: white('           Tierney Cyren'),
  handle: white('bitandbang'),
  shorthandle: white('bnb'),
  work: white('Principal Developer Advocate at Twilio (::)'),
  twitter: gray('https://twitter.com/') + cyan('bitandbang'),
  mastodon: gray('https://mastodon.social/') + magenta('@bnb'),
  npm: gray('https://npmjs.com/') + red('~bnb'),
  github: gray('https://github.com/') + green('bnb'),
  linkedin: gray('https://linkedin.com/in/') + blue('bitandbang'),
  web: cyan('https://bnb.im'),
  npx: `${red('npx')} ${white('bitandbang')}`,
  labelWork: white.bold('    Work:'),
  labelTwitter: white.bold(' Twitter:'),
  labelMastodon: white.bold('Mastodon:'),
  labelnpm: white.bold('     npm:'),
  labelGitHub: white.bold('  GitHub:'),
  labelLinkedIn: white.bold('LinkedIn:'),
  labelWeb: white.bold('     Web:'),
  labelCard: white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const mastodoning = `${data.labelMastodon}  ${data.mastodon}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               mastodoning + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

writeFileSync(join(__dirname, 'bin/output'), green(boxen(output, options)))
