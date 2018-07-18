class Transform extends Entity {
  constructor(entityName, fileText, from, to, fields) {
    super(entityName, fileText);
    // Reference to Canonical
    this.from = from;
    // Refernce to Entity Type
    this.to = to;
    // Array of key and value pairs
    this.fields = fields;
  }
}
