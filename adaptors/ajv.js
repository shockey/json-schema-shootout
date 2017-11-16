const Ajv = require("ajv")
const OpenAPISchema = require("../common/openapi-schema")
const SwaggerSchema = require("../common/swagger-schema")
const JsonSchemaDraft04 = require("../common/draft-04")

module.exports = {
  name: "ajv",
  validateOAS3({ content }) {
    const ajv = new Ajv({
      allErrors: true,
      unknownFormats: ["uri-reference"]
    })
    ajv.addSchema(JsonSchemaDraft04)
    ajv.validate(OpenAPISchema, content).errors
    return new Promise(function(resolve, reject) {
      resolve(ajv.errors)
    });
  },
  validateSwagger2({ content }) {
    const ajv = new Ajv({
      allErrors: true,
      unknownFormats: ["uri-reference"]
    })
    ajv.addSchema(JsonSchemaDraft04)
    ajv.validate(SwaggerSchema, content).errors
    return new Promise(function(resolve, reject) {
      resolve(ajv.errors)
    });
  }
}
