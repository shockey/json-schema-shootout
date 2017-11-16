const Djv = require("djv")
const OpenAPISchema = require("../common/openapi-schema")
const SwaggerSchema = require("../common/swagger-schema")


module.exports = {
  name: "djv",
  validateOAS3({ content }) {
    const djv = new Djv({
      version: "draft-04"
    })
    djv.addFormat("uri-reference", () => true)
    djv.addSchema("openApi3", OpenAPISchema)
    return new Promise(function(resolve, reject) {
      resolve(djv.validate("openApi3", content))
    })
  },
  validateSwagger2({ content }) {
    const djv = new Djv({
      version: "draft-04"
    })
    djv.addFormat("uri-reference", () => true)
    djv.addSchema("swagger2", SwaggerSchema)
    return new Promise(function(resolve, reject) {
      resolve(djv.validate("swagger2", content))
    })
  }
}
