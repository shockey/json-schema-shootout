# adaptors

Adaptors should export an object with name property and a validate method that returns a Promise.

That Promise should resolve to an array of errors, or an empty array.

Full signature:

```
{
  name: String,
  validateOAS3({ content }) => Promise.then(Array),
  validateSwagger2({ content }) => Promise.then(Array)
}
```
