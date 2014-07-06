#!/usr/bin/env node
require('shelljs/global');

// Get the remote tracking branch name of the specified branch, defaults to current branch
var branch = process.argv[2] || exec('git br', {silent: 1}).output.trim();
var ret = exec('git rev-parse --abbrev-ref --symbolic-full-name ' + branch + '@{u}', {silent: 1});
if (ret.code) {
	echo("remote tracking branch NOT found");
	exit(1);
}
else {
	echo(ret.output);
}
