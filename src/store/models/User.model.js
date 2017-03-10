/**
 * Created by amgadserry on 09/03/17.
 */
import _ from 'lodash'
export default class User {
  static fields = ['firstName',
    'lastName',
    'phone',
    'email',
    'image']

  constructor (data) {
    if (this.hasData(data)) {
      for (let key in data) {
        this[key] = data[key]
      }
    } else {
      throw new Error('missing user data')
    }
  }

  hasData (data) {
    let isValid = true
    User.fields.map((field) => isValid || _.has(data, field))
    return isValid
  }

  fullname () {
    return this.firstName + ' ' + this.lastName
  }
}
