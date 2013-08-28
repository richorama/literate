var fs = require('fs');

function parseJS(filename){
	var output = [];
	var lines = fs.readFileSync(filename + ".md").toString().split("\n");
	var inMd = true;
	for (var i = 0; i < lines.length; i++){
		var line = lines[i];
		if (line.indexOf('```') >= 0){
			inMd = !inMd;
			output.push("");
		} else {
			if (!inMd){
				output.push(line);
			} else {
				if (line.indexOf('    ') == 0){
					output.push(line);	
				} else {
					output.push("// " + line);
					parseLine(line).forEach(function(sub){
						output.push(sub);
					});
				}
			}
		}
	}
	output.push("// This javascript file was auto generated.");
	output.push("var __markdown = require('fs').readFileSync('" + filename + ".md').toString();");
	fs.writeFileSync(filename + ".js", output.join("\n"));
	return require(filename);
}

function parseLine(line){
	var parts = line.split('`');
	var output = [];
	for (i = 1; i < parts.length; i+=2){
		output.push(parts[i]);
	}
	return output;
}

module.exports = parseJS;