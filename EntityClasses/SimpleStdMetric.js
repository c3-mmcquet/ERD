class SimpleStdMetric extends Metric {
  constructor(entityName, fileText, srcType, path, expression) {
  	super(entityName, fileText);
    // Reference to source type
    this.srcType = srcType;
    // String of path field value
    this.path = path;
    // String of expression field value
    this.expression = expression;
  }
}
