import * as chalk from 'chalk'

export const logger = {
  log: function (...args) {
    console.log(chalk.blueBright(new Date()), args.join(' '))
  },
  info: function (...args) {
    console.log(chalk.blueBright(new Date()), chalk.blue(args.join(' ')))
  },
  error: function (...args) {
    console.error(chalk.blueBright(new Date()), chalk.red(args.join(' ')))
  },
  success: function (...args) {
    console.log(chalk.blueBright(new Date()), chalk.green(args.join(' ')))
  }
}
