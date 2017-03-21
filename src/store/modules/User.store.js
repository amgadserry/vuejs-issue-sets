/**
 * Created by amgadserry on 09/03/17.
 */
export default {
  state: {
    users: [
      {
        id: '1',
        name: 'Dr House'
      }
    ],
    selectedUsers: new Set()
  },
  mutations: {
    toggleSelected (state, user) {
      if (state.selectedUsers.has(user)) {
        state.selectedUsers.delete(user)
      } else {
        state.selectedUsers.add(user)
      }
    }
  }
}
