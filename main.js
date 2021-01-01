const { exec } = require("child_process");

const videoPath = "/tmp/x/";

function shell(command) {
	return new Promise((resolve, reject) => {
		exec(command, (err, result) => { resolve(result); reject(new Error(err)); });
	});
}

exec(`ffmpeg -i ${videoPath}/input.avi -s 640x480 ${videoPath}/output.avi`, (err, result) => {
	if(err)
		console.log(err);
	else
		console.log(result);
});
