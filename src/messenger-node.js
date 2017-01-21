
const _       = require('lodash');
const chalk   = require('chalk');
const cl      = require('chalkline');
const Table   = require('cli-table2');
const pkgInfo = require('../package.json');

const messenger = {
  version: () => {
    return pkgInfo.version;
  },
  name: () => {
    return pkgInfo.name;
  },
  log: (...params) => {
    console.log(...params);
    return params;
  },
  info: (...params) => {
    console.log(chalk.cyan(...params));
    return params;
  },
  note: (msg, ...params) => {
    // console.log(chalk.keyword('orange')(msg, ...params));
    console.log(msg, ...params);
    return params;
  },
  success: (...params) => {
    console.log(chalk.green(...params));
    return params;
  },
  warning: (...params) => {
    console.log(chalk.yellow(...params));
    return params;
  },
  error: (...params) => {
    console.log(chalk.red(...params));
    return params;
  },
  table: (data) => {
    let table;
    let head = [];
    if (data.length > 0) {
      if (_.isArray(data[0])) {
        header = data[0];
        data.splice(0,1);
      }
      else {
        header = Object.keys(data[0]);
      }
      header = header.map(function (item){
        return chalk.cyan.bold(item);
      });
      table = new Table({head: header});

      data.map((item) => {
        table.push(_.values(item));
      });
      console.log(table.toString());
    }
  },
  chalkline: (color) => {
    if (color.length > 0) {
      try {
        eval(`cl.${color}()`); // eslint-disable-line
      }
      catch (e) {
        console.error(chalk.bgRed.bold(`Invalid Color: ${color}`));
      }
    }
  },
  dir: (data) => {
    console.dir(data);
    return data;
  }
};

module.exports = messenger;
