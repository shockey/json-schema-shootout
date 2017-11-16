const s = require("schemasaurus")
const OpenAPISchema = require("../common/openapi-schema")
const SwaggerSchema = require("../common/swagger-schema")

module.exports = {
  name: "schemasaurus",
  validateOAS3({ content }) {
    const validator = s.newValidator(OpenAPISchema, {
      formats: {
        "uri-reference": {
          regex: /.*/,
          message: "dummy uri-reference validator"
        }
      }
    })
    return new Promise(function(resolve, reject) {
      resolve(validator(content))
    });
  },
  validateSwagger2({ content }) {
    const validator = s.newValidator(SwaggerSchema, {
      formats: {
        "uri-reference": {
          regex: /.*/,
          message: "dummy uri-reference validator"
        }
      }
    })
    return new Promise(function(resolve, reject) {
      resolve(validator(content))
    });
  }
}
