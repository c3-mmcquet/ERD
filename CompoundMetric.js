class CompoundMetric extends Metric {
  constructor(entityName, fileText, inputs, expression) {
  	super(entityName, fileText)
    // Array of CompoundMetric, SimpleTSDeclMetric, and SimpleStdMetric objects
    this.inputs = inputs;
    // String of expression field
    this.expression = expression;
  }
}