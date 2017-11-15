const Themis = require("themis")
const OpenAPISchema = require("../common/openapi-schema")

module.exports = {
  name: "themis",
  validateOAS3({ content }) {
    Themis.registerFormat("uri-reference", () => true)
    const validator = Themis.validator(OpenAPISchema)
    return new Promise(function(resolve, reject) {
      resolve(validator(content, "0"))
    });
  },
  validateSwagger2({ content }) {
    console.error("TODO: implement themis swagger2")
  }
}
