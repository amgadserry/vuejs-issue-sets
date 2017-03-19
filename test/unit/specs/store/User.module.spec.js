/**
 * Created by amgadserry on 16/03/17.
 */
require('es6-promise').polyfill()
import userStore from '../../../../src/store/modules/User.store'
import * as Mutations from '../../../../src/store/mutationTypes'
import * as Actions from '../../../../src/store/actionTypes'
import Api from '../../../../src/api/User.api'
import User from '../../../../src/store/models/User.model'
/* eslint-disable */
chai.should()
chai.use(require('chai-things'))
/* eslint-enable */
const MOCKED_USERS = [
  {
    id: '1',
    firstName: 'Dr',
    lastName: 'House',
    phone: '010100000',
    email: 'x.x@hotmail.com',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/da/63/86/da6386ea022e254dbed22c9ff5495b2a.jpg',
    managers_ids: [],
    employees_ids: ['2', '3']
  },
  {
    id: '2',
    firstName: 'palm',
    lastName: 'face',
    phone: '010100000',
    email: 'y.y@hotmail.com',
    image: 'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg',
    managers_ids: ['1'],
    employees_ids: []
  },
  {
    id: '3',
    firstName: 'whity',
    lastName: 'white',
    phone: '010100000',
    email: 'z.z@hotmail.com',
    image: 'http://dreamicus.com/data/face/face-01.jpg',
    managers_ids: ['1'],
    employees_ids: []
  }
]
describe('Store -> Modules -> User', () => {
  it('it should be initialized with all the required fields', () => {
    expect(userStore.state.loggedUser).to.be.an('object')
    expect(userStore.state.users).to.be.an('array')
  })
  describe('Mutations', () => {
    describe('Set users', () => {
      it('its type should exist', () => {
        expect(Mutations.SET_USERS_MUTATION).to.be.a('string')
      })
      it('it should be able to commit an array of users', () => {
        let state = {users: []}
        userStore.mutations[Mutations.SET_USERS_MUTATION](state, MOCKED_USERS)
        expect(state.users).to.have.lengthOf(3)
      })
      it('it initializes users to be of type User', () => {
        let state = {users: []}
        userStore.mutations[Mutations.SET_USERS_MUTATION](state, MOCKED_USERS)
        expect(state.users).all.be.an.instanceof(User)
      })
    })
    describe('Remove user', () => {
      it('its type should exist', () => {
        expect(Mutations.REMOVE_USER_MUTATION).to.be.a('string')
      })
      it('it should be able to remove an array of users', () => {
        let usersToRemove = []
        usersToRemove.push(MOCKED_USERS[0], MOCKED_USERS[2])
        let userToKeep = MOCKED_USERS[1]
        let state = {users: []}
        userStore.mutations[Mutations.SET_USERS_MUTATION](state, MOCKED_USERS)
        userStore.mutations[Mutations.REMOVE_USER_MUTATION](state, [state.users[0], state.users[2]])
        expect(state.users).to.have.lengthOf(1)
        expect(state.users[0].info.firstName).to.be.eql(userToKeep.firstName)
      })
    })
  })
  describe('Getters', () => {
    describe('Filter users', () => {
      it('it should filter users', () => {
        let state = {users: []}
        userStore.mutations[Mutations.SET_USERS_MUTATION](state, MOCKED_USERS)
        let filteredUsers = userStore.getters.filteredUsers(state, userStore.getters)('Dr')
        expect(filteredUsers).to.have.lengthOf(1)
        expect(filteredUsers[0].info.firstName).to.be.eql('Dr')
      })
    })
    describe('Selected users', () => {
      it('it should get selected users', () => {
        let state = {users: []}
        userStore.mutations[Mutations.SET_USERS_MUTATION](state, MOCKED_USERS)
        state.users[0].isSelected = true
        let selectedUsers = userStore.getters.selectedUsers(state, userStore.getters)()
        expect(selectedUsers).to.have.lengthOf(1)
        expect(selectedUsers[0].info.firstName).to.be.eql('Dr')
      })
    })
  })
  describe('Actions', () => {
    describe('Get all users', () => {
      it('should retrieve and commit all users', () => {
        let stubbedFindAll = sinon.stub(Api, 'findAll', () => {
          return new Promise((resolve) => resolve(MOCKED_USERS))
        })

        let calledMutations = []
        let payloadRecieved
        let commit = (type, payload) => {
          calledMutations.push(type)
          payloadRecieved = payload
        }
        return userStore.actions[Actions.GET_ALL_USERS_ACTION]({commit}).then(() => {
          expect(calledMutations).to.have.lengthOf(1)
          expect(calledMutations[0]).to.be.eql(Mutations.SET_USERS_MUTATION)
          expect(payloadRecieved).to.have.lengthOf(3)
          expect(payloadRecieved).to.be.eql(MOCKED_USERS)
          stubbedFindAll.should.be.called
        })
      })
    })
  })
})
