class EntityType extends Entity {
  constructor(entityName, fileText, mixins, extends, fields, jsFile) {
  	super(entityName, fileText);
    // Array of strings, names of things being mixed in.
    this.mixins = mixins;
    // Reference to an entity type
    this.extends = extends;
    // Array of key/fieldName and value/fieldType pairs
    this.fields = fields;
    // Reference to a JsFile object
    this.jsFile = jsFile;
  }
}