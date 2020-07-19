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

const output = `
${data.name} (${data.handle})

${data.work}

${data.labelInstagram}  ${data.instagram}
${data.labelYoutube}  ${data.youtube}
${data.labelTwitch}  ${data.twitch}
${data.labelTwitter}  ${data.twitter}
${data.labelGitHub}  ${data.github}
${data.labelLinkedIn}  ${data.linkedin}
${data.labelWeb}  ${data.web}

${data.labelCard}  ${data.npx}

`;

console.log(output)
