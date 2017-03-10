/**
 * Created by amgadserry on 09/03/17.
 */
import Api from '../../api/User.api'
import {GET_ALL_USERS_ACTION} from '../actionTypes'
import {SET_USERS_MUTATION} from '../mutationTypes'
import User from '../models/User.model'
export default {
  state: {
    loggedUser: {},
    users: []
  },
  getters: {
    filteredUsers: (state, getters) => (nameFilter) => {
      return state.users.filter((user) => {
        return user.fullname().includes(nameFilter)
      })
    }
  },
  mutations: {
    [SET_USERS_MUTATION] (state, users) {
      let _users = users.map((user) => new User(user))
      state.users = _users
    }
  },
  actions: {
    async [GET_ALL_USERS_ACTION] ({commit}) {
      commit(SET_USERS_MUTATION, await Api.FindAll())
    }
  }
}
