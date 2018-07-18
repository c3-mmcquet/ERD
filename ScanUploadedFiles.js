/* Takes as input a FileList called files, scans to see if src and seed folders have incorrect extensions:
 * (1) All src files have extension either .c3typ or .js
 * (2) All seed files have extnesion .json, .c3ui, or .c3ml
 */

function scanFiles(files) {	
	var packageName = files[0].webkitRelativePath.substring(0, files[0].webkitRelativePath.indexOf("/"));
	var srcPrefix = packageName + "/src/";
	var seedPrefix = packageName + "/seed/";

	var srcHits = 0;
	var seedHits = 0;


	for (var i = 0; i < files.length; i++) {
		if(files[i].webkitRelativePath.startsWith(packageName + "/package.json") ||
		   files[i].webkitRelativePath.endsWith(".DS_Store")) {
			continue;
		}
		if(files[i].webkitRelativePath.startsWith(srcPrefix)) {
			srcHits++;
			if (!files[i].name.endsWith(".c3typ") &&
				!files[i].name.endsWith(".js")) {
				alert("Unexpected file type in src folder.");
				// Throw some error?
			}
		}
		if(files[i].webkitRelativePath.startsWith(seedPrefix)) {
			seedHits++;
			if(!files[i].name.endsWith(".c3ui") &&
		   		!files[i].name.endsWith(".c3ml") &&
		   		!files[i].name.endsWith(".json")) {
				alert("Unexpected file type in seed folder:" + files[i].name);
				// Throw some error?
			}
		}
	}
	if (srcHits == 0 || seedHits == 0) {
		alert("src and/or seed folder not found.");
	}
	else {
		var output = document.getElementById("listing");

  		for (var i=0; i<files.length; i++) {
    		var item = document.createElement("li");
    		item.innerHTML = files[i].webkitRelativePath;
    		output.appendChild(item);
  		}
		alert("Upload successful.");
	}
}
