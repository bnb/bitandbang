#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const { readFileSync } = require('node:fs')
const { join } = require('node:path')
const output = readFileSync(join(__dirname, 'output'), 'utf8')
console.log(output)
