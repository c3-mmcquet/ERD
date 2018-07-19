// Store a FileList in the variable files. A FileList is an array for File objects.
document.getElementById("filepicker").addEventListener("change", function(event) {
	var files = event.target.files;
	var contentStrs = [];
	var entities = [];
	
 	// scanFiles(files);
	
	readFiles(files, contentStrs);
	parseFiles(contentStrs, entities);

	for (var i = 0; i < entities.length; i++) {
		console.log(entities[i].toString());
	}

}, false);
