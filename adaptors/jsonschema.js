const JsonSchema = require("jsonschema")
const OpenAPISchema = require("../common/openapi-schema")
const SwaggerSchema = require("../common/swagger-schema")

module.exports = {
  name: "JSONSchema",
  validateOAS3({ content }) {
    const validator = new JsonSchema.Validator()
    const res = validator.validate(content, OpenAPISchema)
    return new Promise(function(resolve, reject) {
      resolve(res.errors)
    })
  },
  validateSwagger2({ content }) {
    const validator = new JsonSchema.Validator()
    const res = validator.validate(content, SwaggerSchema)
    return new Promise(function(resolve, reject) {
      resolve(res.errors)
    })
  }
}
