#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const fsUtil= require('./fsUtil');

program
  .version('1.0.0', '-v, --version')
  .command('file [filename]')
  .alias('f')
  .option('--dir [dir]', 'add a directory')
  .description('Description: 测试npm发包')
  .action(option => {
    var config = Object.assign({}, option);
    var promps = [];
    if(config.filename !== 'string') {
      promps.push({
        type: 'input',
        name: 'filename',
        message: '请输入文件名称',
        validate: function (input){
          if(!input) {
            return '不能为空';
          }
          return true;
        }
      });
    }
    inquirer.prompt(promps).then(function (answers) {
      if (answers.filename) {
        fsUtil.write(process.cwd() + '/' + answers.filename, 'success');
      }
    })
  })
program.parse(process.argv);
