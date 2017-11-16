// https://github.com/swagger-api/swagger-editor/issues/1519

const definition = {
  "openapi": "3.0.0",
  "info": {
    "title": "Example API",
    "description": "Service API.",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "http://api.example.com"
    }
  ],
  "paths": {
    "/login/local": {
      "post": {
        "tags": [
          "login"
        ],
        "summary": "Login using email or nickname",
        "description": "Returns customer info and jwt access and refresh tokens",
        "security": [
          {
            "apiKey": [

            ]
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "emailOrNickname": {
                    "type": "string",
                    "required": true
                  },
                  "password": {
                    "type": "string",
                    "required": true
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Login successful",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "customer": {
                      "$ref": "#/components/schemas/Admin"
                    },
                    "refreshToken": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "apiKey": {
        "type": "apiKey",
        "in": "header",
        "name": "x-application-key"
      }
    },
    "schemas": {
      "Admin": {
        "type": "object",
        "properties": {
          "_id": {
            "type": "string"
          },
          "name": {
            "type": "object",
            "properties": {
              "first": {
                "type": "string"
              },
              "last": {
                "type": "string"
              }
            }
          },
          "email": {
            "type": "object",
            "properties": {
              "address": {
                "type": "string"
              },
              "verified": {
                "type": "boolean"
              },
              "token": {
                "type": "string"
              }
            }
          },
          "password": {
            "type": "string"
          },
          "recoveryToken": {
            "type": "string"
          },
          "lastLogin": {
            "type": "string",
            "format": "date-time"
          }
        }
      }
    }
  }
}


module.exports = {
  name: "Properties with extraneous require",
  definition
}
