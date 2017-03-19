/**
 * Created by amgadserry on 09/03/17.
 */
import _ from 'lodash'
export default class User {
  static requiredFields = [
    'id',
    'firstName',
    'lastName',
    'phone',
    'email',
    'image',
    'managers_ids',
    'employees_ids']

  constructor (data) {
    if (this._hasData(data)) {
      this.info = data
      this.newUser = false
    } else {
      this.info = {}
      User.requiredFields.map((field) => { this.info[field] = undefined })
      this.newUser = true
    }
    this._initExtraFields()
    this.editInfo = _.cloneDeep(this.info)
  }

  _initExtraFields () {
    this.managers = []
    this.employees = []
    this._createAnimationId()
    this._initGridData()
  }

  _initGridData () {
    this.grid = {}
    this.grid.isSelected = false
    this.grid.isBeingDeleted = false
  }

  _createAnimationId () {
    let timeStamp = Math.floor(Date.now() / 1000)
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    this.animationId = text + timeStamp
  }

  _hasData (data) {
    if (Object.keys(data).length === 0) return false
    return User.requiredFields.reduce(
      (isValid, field) => isValid && _.has(data, field), true)
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
