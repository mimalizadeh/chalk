import chalk from '../source/index.js';

chalk.level = 3;
const themeChalk = chalk.theme(
    {theme1: 'bold green bgWhite',
    theme2: 'bold blue bgGreen'}
);
console.log(themeChalk.theme1('Hello'));
console.log(themeChalk.theme2('World'));