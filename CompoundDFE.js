class CompoundDFE extends DFE {
  constructor(entityName, fileText, srcType, input) {
  	super(entityName, fileText, srcType)
    // Reference to SimpleDFE
    this.input = input;
  }
}