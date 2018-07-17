class JsFile {
  constructor(entityName, sourceEntity, fileText) {
  	// String, name of entity
    this.entityName = entityName;
    // Reference to entity this object is associated with
    this.sourceEntity = sourceEntity;
    // String, full text of file
    this.fileText = fileText;
  }
}