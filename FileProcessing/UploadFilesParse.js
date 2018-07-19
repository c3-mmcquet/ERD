function readFiles(files, contentStrs) {
	var reader;

	for (var i = 0; i < files.length; i++) {
		let name = files[i].name;
		// Create reader and define logic
		reader = new FileReader();
		reader.onload = function(event) {
			console.log('READ COMPLETE FOR FILE ' + i);
			var contents = event.target.result;

			// Entity types, Analytics, DFEs, Canonicals, Transforms
			if (name.endsWith('c3typ')) {
				if (contents.includes('entity ')){
					console.log("ENTITY TYPE READ FOR #" + i);
					contentStrs.push(contents);
					//entities.push(processEntityType(file, contents));
				}
				else if (contents.includes('Analytic<')){
					//entities.push(processAnalytic(file));
				}
				else if (contents.includes(' transforms ')){
					//entities.push(processTransform(file));
				}
				else if (contents.includes('Canonical<')){
					//entities.push(processCanonical(file));
				}
				else if (contents.includes('TSDataFlowEvent<')){
					//entities.push(processSimpleDFE(file));
				}
				else if (contents.includes('CompoundDataFlowEvent<')){
					//entities.push(processCompoundDFE(file));
				}				
			}
			else {
				if (contents.includes('tsDecl')){
					//entities.push(processSimpleTsDeclMectric(file));
				}
				else { 
					//entities.push(processSimpleStdMetric(file));
				}
			}
		};
	}
}

function parseFiles(contentStrs, entities) {
	var category;

	console.log('Entering for loop')

	for(var i = 0; i < contentStrs.length; i++) {
		console.log("Processing file #" + i);
		processEntity(contentStrs, entities, i);
	}

	return entities;
}

function processEntity(contentStrs, entities, i) {
	//var name = file.name;
	//var path = file.webkitRelativePath;
/*
	// Create reader and define logic
	var reader = new FileReader();
	reader.onload = function(event) {
		console.log('LOAD COMPLETE FOR FILE ' + i);
		var contents = event.target.result;

		// Entity types, Analytics, DFEs, Canonicals, Transforms
		if (name.endsWith('c3typ')) {
			if (contents.includes('entity ')){
				console.log("ENTITY TYPE FOUND")
				entities.push(processEntityType(file, contents));
			}
			else if (contents.includes('Analytic<')){
				//entities.push(processAnalytic(file));
			}
			else if (contents.includes(' transforms ')){
				//entities.push(processTransform(file));
			}
			else if (contents.includes('Canonical<')){
				//entities.push(processCanonical(file));
			}
			else if (contents.includes('TSDataFlowEvent<')){
				//entities.push(processSimpleDFE(file));
			}
			else if (contents.includes('CompoundDataFlowEvent<')){
				//entities.push(processCompoundDFE(file));
			}
		}
		else {
			if (contents.includes('tsDecl')){
				//entities.push(processSimpleTsDeclMectric(file));
			}
			else { 
				//entities.push(processSimpleStdMetric(file));
			}
		}
	};
	*/

	// Process entities
	if (name.endsWith('js')) {
		//console.log('JS')
		//entities.push(processJsFile(file));
	}
	else if (name.endsWith('json') && path.includes('CompoundMetric')) {
		//console.log('COMPOUND')
		//entities.push(processCompoundMetric(file));;
	}
	else if (name.endsWith('json') || name.endsWith('c3typ')) {
		console.log('READING #' + i);
		// Process after read completed
		reader.readAsText(file);
	}
	else {
		return null;
	}
}


