'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const slugify = use('slugify')

class Team extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (teamInstance) => {
      teamInstance.slug = slugify(teamInstance.name, {
        replacement: '-',
        lower: true
      })
    })
  }

  users () {
    return this.belongsTo('App/Models/User').pivotModel('App/Models/UserTeam')
  }

  projects () {
    return this.hasMany('App/Models/Project')
  }
}

module.exports = Team
