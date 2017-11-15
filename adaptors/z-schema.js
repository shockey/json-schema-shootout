const ZSchema = require("z-schema")
const OpenAPISchema = require("../common/openapi-schema")

module.exports = {
  name: "z-schema",
  validateOAS3({ content }) {
    const validator = new ZSchema()
    validator.validate(content, OpenAPISchema)
    return new Promise(function(resolve, reject) {
      resolve(validator.getLastErrors())
    })
  },
  validateSwagger2({ content }) {
    console.error("TODO: implement z-schema swagger2")
  }
}
