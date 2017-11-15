const IsMyJsonValid = require("is-my-json-valid")
const OpenAPISchema = require("../common/openapi-schema")

module.exports = {
  name: "is-my-json-valid",
  validateOAS3({ content }) {
    const validate = new IsMyJsonValid(OpenAPISchema, { greedy: true, verbose: true })
    validate(content)
    return new Promise(function(resolve, reject) {
      resolve(validate.errors)
    });
  },
  validateSwagger2({ content }) {
    console.error("TODO: implement is-my-json-valid swagger2")
  }
}
