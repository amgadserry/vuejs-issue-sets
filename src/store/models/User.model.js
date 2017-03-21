/**
 * Created by amgadserry on 09/03/17.
 */
import Store from '../'
export default class User {

  get isSelected () {
    return Store.state.User.selectedUsers.has(this)
  }

  constructor (data) {
    this.info = data
  }

}
