const TV4 = require("tv4")
const OpenAPISchema = require("../common/openapi-schema")

module.exports = {
  name: "tv4",
  validateOAS3({ content }) {
    const res = TV4.validateMultiple(content, OpenAPISchema)
    return new Promise(function(resolve, reject) {
      resolve(res.errors)
    });
  },
  validateSwagger2({ content }) {
    console.error("TODO: implement tv4 swagger2")
  }
}
