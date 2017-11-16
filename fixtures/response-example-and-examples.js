// https://github.com/swagger-api/swagger-editor/issues/1489

const definition = {
  "openapi": "3.0.0",
  "info": {
    "version": "validation",
    "title": "Spec with both example and examples"
  },
  "paths": {
    "/myPath": {
      "get": {
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "example": "sample response",
                "examples": {
                  "foo": {
                    "value": "anonther response"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}


module.exports = {
  name: "Response example and examples",
  definition
}
