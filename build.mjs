// Pull in our modules
import chalk from 'chalk';
import boxen from 'boxen';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
};

// Text + chalk definitions
const data = {
	name: chalk.white('           Tierney Cyren'),
	handle: chalk.white('bitandbang'),
	shorthandle: chalk.white('bnb'),
	work: chalk.white('Principal Developer Advocate at Twilio (::)'),
	twitter: chalk.gray('https://twitter.com/') + chalk.cyan('bitandbang'),
	mastodon: chalk.gray('https://mastodon.social/') + chalk.magenta('@bnb'),
	npm: chalk.gray('https://npmjs.com/') + chalk.red('~bnb'),
	github: chalk.gray('https://github.com/') + chalk.green('bnb'),
	linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('bitandbang'),
	web: chalk.cyan('https://bnb.im'),
	npx: `${chalk.red('npx')} ${chalk.white('bitandbang')}`,
	labelWork: chalk.white.bold('    Work:'),
	labelTwitter: chalk.white.bold(' Twitter:'),
	labelMastodon: chalk.white.bold('Mastodon:'),
	labelnpm: chalk.white.bold('     npm:'),
	labelGitHub: chalk.white.bold('  GitHub:'),
	labelLinkedIn: chalk.white.bold('LinkedIn:'),
	labelWeb: chalk.white.bold('     Web:'),
	labelCard: chalk.white.bold('    Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const mastodoning = `${data.labelMastodon}  ${data.mastodon}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
	heading + // data.name + data.handle
	newline +
	newline + // Add one whole blank line
	working +
	newline + // data.labelWork + data.work
	twittering +
	newline + // data.labelTwitter + data.twitter
	mastodoning +
	newline + // data.labelTwitter + data.twitter
	npming +
	newline + // data.labelnpm + data.npm
	githubing +
	newline + // data.labelGitHub + data.github
	linkedining +
	newline + // data.labelLinkedIn + data.linkedin
	webing +
	newline +
	newline + // data.labelWeb + data.web
	carding; // data.labelCard + data.npx

writeFileSync(
	join(import.meta.dirname, 'bin/output'),
	chalk.green(boxen(output, options)),
);
