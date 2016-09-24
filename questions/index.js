const levels = require('./levels')

function getQuestionsByToken (token) {
  const level = levels[token]
  return level
}

module.exports = getQuestionsByToken
