const baseAbsPath = __dirname + '/' ;
const express = require('express');
const app = express();
const util = require('util');
const exec = require('child_process').exec;
function getCurrentTime(){
	const time = new Date();
	console.log(time);
}
function callLogrotate(){
	const child = exec('logrotate -v' + ' ' + baseAbsPath + 'logrotate.config -s' + ' ' + baseAbsPath + 'logrotate.status',
		{ encoding: 'utf8',
		timeout: 0,
		maxBuffer: 200*1024,
		killSignal: 'SIGTERM',
		cwd: null,
		env: null },
		function (error, stdout, stderr) {
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
			if (error !== null) {
				console.log('exec error: ' + error);
			}
		}
	)
}
const timeInterval = setInterval(getCurrentTime,10000);
const logInterval = setInterval(callLogrotate,10000)
