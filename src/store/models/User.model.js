/**
 * Created by amgadserry on 09/03/17.
 */
import _ from 'lodash'
export default class User {
  static requiredFields = ['firstName',
    'lastName',
    'phone',
    'email',
    'image']

  constructor (data) {
    if (this.hasData(data)) {
      this.info = data
      this.initExtraFields()
    } else {
      this.info = {}
    }
    this.editInfo = _.cloneDeep(this.info)
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
    User.requiredFields.map((field) => isValid || _.has(data, field))
    return isValid
  }

  fullname () {
    return this.info.firstName + ' ' + this.info.lastName
  }

  includes (filter) {
    for (let key in this.info) {
      if (key === 'image') continue
      if (this.info[key].includes(filter)) {
        return true
      }
    }
    return false
  }

  save () {
    this.info = _.cloneDeep(this.editInfo)
  }

}
