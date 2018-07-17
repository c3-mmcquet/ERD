class SimpleDFE extends DFE {
  constructor(entityName, fileText, srcType, metric) {
  	super(entityName, fileText, srcType)
    // Reference to Metric object
    this.metric = metric;
  }
}