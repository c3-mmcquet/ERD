
// Store a FileList in the variable files. A FileList is an array for File objects.
document.getElementById("filepicker").addEventListener("change", function(event) {
	var files = event.target.files;

 	scanFiles(files);

	/* Parse the files, gathering important infomration about each of the entities. */
	/* TODO = parseFiles(files); */

}, false);
