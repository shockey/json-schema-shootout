const ZSchema = require("z-schema")
const OpenAPISchema = require("../common/openapi-schema")
const SwaggerSchema = require("../common/swagger-schema")

module.exports = {
  name: "z-schema",
  validateOAS3({ content }) {
    const validator = new ZSchema({
      ignoreUnknownFormats: true
    })
    validator.validate(content, OpenAPISchema)
    return new Promise(function(resolve, reject) {
      resolve(validator.getLastErrors())
    })
  },
  validateSwagger2({ content }) {
    const validator = new ZSchema({
      ignoreUnknownFormats: true
    })
    validator.validate(content, SwaggerSchema)
    return new Promise(function(resolve, reject) {
      resolve(validator.getLastErrors())
    })
  }
}
