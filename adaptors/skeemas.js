const Skeemas = require("skeemas")
const OpenAPISchema = require("../common/openapi-schema")

module.exports = {
  name: "skeemas",
  validateOAS3({ content }) {
    const res = Skeemas.validate(content, OpenAPISchema)
    return new Promise(function(resolve, reject) {
      resolve(res.errors)
    });
  },
  validateSwagger2({ content }) {
    console.error("TODO: implement skeemas swagger2")
  }
}
