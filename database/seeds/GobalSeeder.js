'use strict'

/*
|--------------------------------------------------------------------------
| GobalSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User')
const Role = use('Adonis/Acl/Role')
const Permission = use('Adonis/Acl/Permission')

class GobalSeeder {
  async run () {
    const user = await User.create({
      name: 'root',
      email: 'root@root.com',
      password: '100506'
    })

    const createInvite = await Permission.create({
      slug: 'invites_create',
      name: 'Convidar Membros'
    })

    const createProject = await Permission.create({
      slug: 'projects_create',
      name: 'Criar Projetos'
    })

    const admin = await Role.create({
      slug: 'administrator',
      name: 'Administrador'
    })

    const moderator = await Role.create({
      slug: 'moderator',
      name: 'Moderador'
    })

    await Role.create({
      slug: 'visitor',
      name: 'Visitante'
    })

    await admin.permissions().attach([createInvite.id, createProject.id])
    await moderator.permissions().attach([createProject.id])

    const team = await user.teams().create({
      name: 'Primeiro Team',
      user_id: user.id
    })

    const teamJoin = await user.teamJoins().where('team_id', team.id).first()
    await teamJoin.roles().attach([admin.id])
  }
}

module.exports = GobalSeeder
