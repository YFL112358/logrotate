# logrotate

## task
- 写一个nodejs script "alarm_1.js", 使之每10秒输出当前的时间"YYYY-MM-DD-hh-ii-ss"到一个logging目录下的alarm.log文件，如"logging/alarm.log"。
- 该script应能用类似"start_api_daemon"的bash script启动并进入Linux background process运行，并能以类似“stop_api_daemon"的bash script停止其background process。
- 尝试手动使用logrotate处理logging/alarm.log。
- 尝试用"alarm_1.js"周期性调用logrotate处理logging/alarm.log。建议阅读nodejs的"child_process"文档，学习如何用nodejs调用bash shell命令 https://nodejs.org/docs/v0.4.6/api/child_processes.html#child_process.exec

## run the project
- clone project: 
	- $ git clone https://github.com/shareming7/logrolate.git
- install some development package:
	- $ npm install
- run the trigger_rotation to produce config file
	- $ ./trigger_rotation
- run the alarm_1.js
	- $ ./start_node_alarm_1
- stop the project
	-$ ./stop_node_alarm_1


