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
        console.log(`type: ${typeof errors}\n`)
        console.log(util.inspect(errors), '\n\n')
        return errors
      }).then(errors => res[fixt.name][adaptor.name] = errors || [])
    } catch(e) {
      console.log(`  ${adaptor.name} \n\n`.blue)
      console.log(e)
      console.log('\n\n\n\n')
    }
  })
}, {})
