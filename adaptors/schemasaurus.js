const s = require("schemasaurus")
const OpenAPISchema = require("../common/openapi-schema")

module.exports = {
  name: "schemasaurus",
  validateOAS3({ content }) {
    const validator = s.newValidator(OpenAPISchema)
    return new Promise(function(resolve, reject) {
      resolve(validator(content))
    });
  },
  validateSwagger2({ content }) {
    console.error("TODO: implement jsen swagger2")
  }
}
