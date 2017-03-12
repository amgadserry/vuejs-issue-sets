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
      this.initExtraFields()
    } else {
      throw new Error('missing user data')
    }
  }

  initExtraFields () {
    this.createAnimationId()
    this.isSelected = false
    this.isBeingDeleted = false
  }

  createAnimationId () {
    let timeStamp = Math.floor(Date.now() / 1000)
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    this.animationId = text + timeStamp
  }

  hasData (data) {
    let isValid = true
    User.fields.map((field) => isValid || _.has(data, field))
    return isValid
  }

  fullname () {
    return this.firstName + ' ' + this.lastName
  }

  includes (filter) {
    for (let key in this) {
      if (key === 'image' || key === 'animationId' || key === 'isSelected') continue
      if (this[key].includes(filter)) {
        return true
      }
    }
    return false
  }

}
