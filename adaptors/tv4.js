const TV4 = require("tv4")
const OpenAPISchema = require("../common/openapi-schema")
const SwaggerSchema = require("../common/swagger-schema")

module.exports = {
  name: "tv4",
  validateOAS3({ content }) {
    const res = TV4.validateMultiple(content, OpenAPISchema)
    return new Promise(function(resolve, reject) {
      resolve(res.errors)
    });
  },
  validateSwagger2({ content }) {
    const res = TV4.validateMultiple(content, SwaggerSchema)
    return new Promise(function(resolve, reject) {
      resolve(res.errors)
    });
  }
}
