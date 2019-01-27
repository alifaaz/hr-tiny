import chalk from 'chalk';
import emoji from 'node-emoji';
// for better debugging experince
const { emojify } = emoji;

export const error = chalk.bold.red;
export const success = chalk.bold.green;
export const yelo = chalk.yellow;
// eslint-disable-next-line prefer-destructuring
export const bgred = chalk.bgred;
export const bgreen = chalk.bold.bgGreen;
export const emojies = {
  coffee: emojify(':coffee:'),
  heart: emojify(':heart:'),
  cheart: emojify(':couple_with_heart:'),
  warning: emojify(':couple_with_heart:'),
  quest: emojify(':question:'),

};

export default {
  error, success, yelo, bgred, bgreen, emojies,
};
