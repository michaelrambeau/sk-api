const levels = {
  token1: {
    order: 'random',
    name: 'NBA questions',
    sets: [
      {
        minCorrect: 2,
        questions: require('./data/nba1.json')
      },
      {
        minCorrect: 2,
        questions: require('./data/nba2.json')
      }
    ]
  },
  token2: {
    order: 'random',
    name: 'Fractions game',
    sets: [
      {
        minCorrect: 2,
        questions: require('./data/fractions.json')
      }
    ]
  }
}
module.exports = levels
