class Canonical extends Entity {
  constructor(entityName, fileText, fields) {
  	super(entityName, fileText)
    // Array of key/fieldName and value pairs
    this.fields = fields;
  }
}