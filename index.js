const util = require('util')
const colors = require('colors');

const fixtures = require("./fixtures")
const adaptors = require("./adaptors")

const resultSets = fixtures.reduce((res, fixt) => {
  console.log(`\n\n${fixt.name}`.yellow)
  console.log(`=========\n\n\n`.yellow)
  res[fixt.name] = res[fixt.name] || {}
  adaptors.forEach(adaptor => {
    const isOAS3 = !!fixt.definition.openapi
    const validateFn = adaptor[isOAS3 ? "validateOAS3" : "validateSwagger2"]
    try {
      validateFn({
        content: fixt.definition
      }).then(errors => {
        console.log(`  ${adaptor.name} \n\n`.blue)
        console.log(`count: ${Array.isArray(errors) ? errors.length : "(not an array)"}\n`)
        if(!Array.isArray(errors)) {
          console.log(errors, "\n\n")
        }
        errors.forEach(err => {
          console.log(`
CODE:      ${err.code ||err.keyword || "(no error code)"}
PATH:      ${err.path || err.property || err.dataPath || err.field || "(no path)"}
MESSAGE:   ${err.message || "(no message)"}`)
        })
        console.log('\n\n')
        return errors
      }).then(errors => res[fixt.name][adaptor.name] = errors || [])
    } catch(e) {
      console.log(`  ${adaptor.name} \n\n`.blue)
      console.log(e.message ? `Failed with error: ${e.message}` : e)
      console.log('\n\n\n\n')
    }
  })
}, {})
