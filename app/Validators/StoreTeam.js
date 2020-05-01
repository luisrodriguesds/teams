'use strict'

class StoreTeam {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required'
    }
  }
}

module.exports = StoreTeam
