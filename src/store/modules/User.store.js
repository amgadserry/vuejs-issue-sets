/**
 * Created by amgadserry on 09/03/17.
 */
import Api from '../../api/User.api'
import * as actions from '../actionTypes'
import * as mutations from '../mutationTypes'
import User from '../models/User.model'
export default {
  state: {
    loggedUser: {},
    users: []
  },
  getters: {
    filteredUsers: (state, getters) => (key) => {
      return state.users.filter((user) => {
        return user.includes(key)
      })
    },
    selectedUsers: (state, getters) => () => {
      return state.users.filter((user) => {
        return user.isSelected
      })
    }
  },
  mutations: {
    [mutations.SET_USERS_MUTATION] (state, users) {
      let _users = users.map((user) => new User(user))
      state.users = _users
    },
    [mutations.REMOVE_USER_MUTATION] (state, users) {
      users.map((user) => {
        state.users.splice(state.users.indexOf(user), 1)
      })
    }
  },
  actions: {
    async [actions.GET_ALL_USERS_ACTION] ({commit}) {
      let users = await Api.FindAll()
      commit(mutations.SET_USERS_MUTATION, users)
      return await users
    },
    async [actions.DELETE_USER_ACTION] ({commit}, users) {
      return Api.delete(users).then(() => {
        commit(mutations.REMOVE_USER_MUTATION, users)
      })
    }
  }
}
