class DFE extends Entity {
  constructor(entityName, fileText, srcType) {
  	super(entityName, fileText);
    // Reference to source type
    this.srcType = srcType;
  }
}