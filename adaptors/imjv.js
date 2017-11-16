const IsMyJsonValid = require("is-my-json-valid")
const OpenAPISchema = require("../common/openapi-schema")
const SwaggerSchema = require("../common/swagger-schema")

module.exports = {
  name: "is-my-json-valid",
  validateOAS3({ content }) {
    const validate = new IsMyJsonValid(OpenAPISchema, { greedy: true, verbose: true })
    validate(content)
    return new Promise(function(resolve, reject) {
      resolve(validate.errors)
    })
  },
  validateSwagger2({ content }) {
    const validate = new IsMyJsonValid(SwaggerSchema, { greedy: true, verbose: true })
    validate(content)
    return new Promise(function(resolve, reject) {
      resolve(validate.errors)
    })
  }
}
