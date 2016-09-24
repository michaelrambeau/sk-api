const feathers = require('feathers')
const cors = require('cors')
const rest = require('feathers-rest')

const getQuestionsByToken = require('./questions')

const app = feathers()
app
app
  .configure(rest())
  .use(cors())
  .use('/questions', {
    get (id, params) {
      const level = getQuestionsByToken(id)
      if (!level) return Promise.reject('Invalid token!')
      return Promise.resolve({
        level
      })
    }
  })

const port = 3030
console.log('API Server listening on port', port)
app.listen(port)
