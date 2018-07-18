class SimpleStdMetric extends Metric {
  constructor(entityName, fileText, srcType, tsDecl) {
  	super(entityName, fileText);
    // Reference to source type
    this.srcType = srcType;
    // Array of key/fieldName and value pairs
    this.tsDecl = tsDecl;
  }
}
