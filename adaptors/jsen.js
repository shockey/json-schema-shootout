const Jsen = require("jsen")
const OpenAPISchema = require("../common/openapi-schema")
const SwaggerSchema = require("../common/swagger-schema")

module.exports = {
  name: "jsen",
  validateOAS3({ content }) {
    const validate = Jsen(OpenAPISchema, { greedy: true })
    const res = validate(content)
    return new Promise(function(resolve, reject) {
      resolve(validate.errors)
    });
  },
  validateSwagger2({ content }) {
    const validate = Jsen(SwaggerSchema, { greedy: true })
    const res = validate(content)
    return new Promise(function(resolve, reject) {
      resolve(validate.errors)
    });
  }
}
