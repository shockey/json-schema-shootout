// https://github.com/swagger-api/swagger-editor/issues/1511

const definition = {
  "swagger": "2.0",
  "info": {
    "version": "1",
    "title": "oneOf validation fail",
    "description": "ok"
  },
  "paths": {
    "/models/{name}": {
      "get": {
        "summary": "Extra `example` field in parameter",
        "description": "ok",
        "parameters": [
          {
            "in": "path",
            "name": "name",
            "type": "string",
            "required": true,
            "example": "ok"
          }
        ],
        "responses": {
          "200": {
            "description": "Ok"
          }
        }
      }
    }
  }
}


module.exports = {
  name: "Path parameter with `example` property",
  definition
}
