/* PROCESS FUNCTIONS */

function processEntityType(file, contents) {
	var entityName = file.name.substring(0, file.name.indexOf('.'));

	if (contents.includes('mixes')) {
		var mixinsStr = findMixins(contents);
	}

	if (contents.includes('extends')) {
		var extendsStr = findExtends(contents);
	}

	var fields = findFields(contents, false);

	/* js files will be linked at the end */

	var entityType = new EntityType(entityName, contents, mixinsStr, extendsStr, fields, null);
	conole.log("ENTITY TYPE RETURNED")
	return entityType;
}


/* HELPER FUNCTIONS */

function findMixins(contents) {
	var beginMixins = contents.indexOf('mixes');
	beginMixins += 6; // Skip over word "mixes"

	var endMixins;
	if (contents.indexOf('type key') != -1) {
		endMixins = contents.indexOf('type key') - 1;
	}
	else if (contents.indexOf('schema name') != -1) {
		endMixins = contents.indexOf('schema name') - 1;
	}
	else if (indexOf('transforms') != -1) {
		endMixins = contents.indexOf('transforms') - 1;
	}
	else {
		endMixins = contents.indexOf('{') - 1;
	}

	// The hard way to do this is to parse through each mixin and put it
	// in an array. Nahhhhh.
	return contents.substring(beginMixins, endMixins);
}

function findExtends(contents) {
	var beginExtends = contents.indexOf('extends');
	beginExtends += 8; // Skip over word "extends"

	var endExtends;
	var i = beginExtends;
	while (contents.charAt(i) != ' ') {
		i++
	}
	endExtends = i;

	return contents.substring(beginExtends, endExtends);
}

function findFields(contents, isTransform) {
	var pattern = /\n[a-z|\s]*:[a-z|\s]*\n/i;

	var fieldStrings = contents.match(pattern);

	var fields = [];

	var fieldName = "";
	var fieldType = "";
	var j;
	var k;

	for (var i = 0; i < fieldStrings.length; i++) {
		j = fieldStrings[i].search(/[a-z]/i);
		k = j;

		// Search for field name
		while (fieldStrings[i].charAt(k) != ' ' &&
			fieldStrings[i].charAt(k) != ':') {
			k++;
		}
		fieldName = fieldStrings[i].substring(j,k);

		// Search for field type
		j = fieldStrings[i].indexOf(':') + 1;
		while (fieldStrings[i].charAt(j) == ' ') {
			j++;
		}
		k = j;
		while (fieldStrings[i].charAt(k) != ' ') {
			k++;
		}
		fieldType = fieldStrings[i].substring(j,k);

		// Add entry to fields array
		fields.push({
    		key: fieldName,
    		val: fieldType
		});
	}
	return fields;
}






