class Analytic extends Entity {
  constructor(entityName, fileText, input, output, jsFile) {
  	super(entityName, fileText)
    // Reference to CompoundDFE object
    this.input = input;
    // Reference to output type, void if null
    this.output = output;
    // Reference to a JsFile object
    this.jsFile = jsFile;
  }
}
