const Jsck = require("jsck")
const OpenAPISchema = require("../common/openapi-schema")
const SwaggerSchema = require("../common/swagger-schema")

module.exports = {
  name: "jsck",
  validateOAS3({ content }) {
    const validate = new Jsck.draft4(OpenAPISchema)
    const res = validate(content)
    return new Promise(function(resolve, reject) {
      resolve(validate.errors)
    })
  },
  validateSwagger2({ content }) {
    const validate = new Jsck.draft4(SwaggerSchema)
    const res = validate(content)
    return new Promise(function(resolve, reject) {
      resolve(validate.errors)
    })
  }
}
