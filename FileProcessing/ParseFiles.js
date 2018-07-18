function parseFiles(files) {
	var entityList;
	var category;
	for(var i = 0; i < files.length; i++) {
		category = getCategory(files[i]);
		// TODO: process into a type
		if (category != null){
			if (category == 'type'){

			}
			if (category == 'js'){

			}
			if (category == 'simpleMetric'){
				
			}
			if (category == 'compoundMetric'){
				
			}
		}

	}
	// TODO: what to return?
}

function getCategory(file) {
	var name = file.name;
	var category;
	if (name.endsWith('c3typ')) {
		var reader = new FileReader();
		var contents = reader.readAsText(file);
		if (contents.includes('entity ')){
			category = 'entityType'
		}
		else if (contents.includes('Analytic<')){
			category = 'analytic'
		}
		else if (contents.includes(' transforms ')){
			category = 'transform'
		}
		else if (contents.includes('Canonical<')){
			category = 'canonical'
		}
		else if (contents.includes('TSDataFlowEvent<')){
			category = 'simpleDFE'
		}
		else if (contents.includes('CompoundDataFlowEvent<')){
			category = 'compoundDFE'
		}
	}
	else if (name.endsWith('js')){
		category = 'js';
	}
	else if (name.endsWith('json')){
		var path = file.webkitRelativePath;

		if (path.includes('SimpleMetric')){
			var reader = new FileReader();
			var contents = reader.readAsText(file);
			if (contents.includes('tsDecl')){
				category = 'tsDecl'
			}
			else { category = 'standardSimpleMetric' }
		}
		if (path.includes('CompoundMetric')){
			category = 'compoundMetric';
		}
	}
	else { category == null }
	return category;
}


