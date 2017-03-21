/**
 * Created by amgadserry on 09/03/17.
 */
import User from '../models/User.model'
export default {
  state: {
    users: [
      new User({
        id: '1',
        firstName: 'Dr',
        lastName: 'House'
      })
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
