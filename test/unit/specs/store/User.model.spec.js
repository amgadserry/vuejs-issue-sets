/**
 * Created by amgadserry on 16/03/17.
 */
import User from '../../../../src/store/models/User.model'
const USER_MOCK_DATA =
  {
    id: '1',
    firstName: 'Dr',
    lastName: 'House',
    phone: '010100000',
    email: 'x.x@hotmail.com',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/da/63/86/da6386ea022e254dbed22c9ff5495b2a.jpg'
  }
describe('Store -> Models -> User', () => {
  it('it should raise newUser flag when initialized with no data', () => {
    let user = new User({})
    expect(user.newUser).to.be.true
  })
  it('it should not raise newUser flag when initialized with proper data', () => {
    let user = new User(USER_MOCK_DATA)
    expect(user.newUser).to.be.false
  })
  it('it should initialize info field with proper data', () => {
    let mockedUser = new User(USER_MOCK_DATA)
    expect(mockedUser.info).to.include.keys('firstName', 'lastName', 'phone', 'email', 'image')
  })
  it('it should create a unique animationId', () => {
    let ids = new Set()
    let trials = 1000
    for (let i = 0; i < trials; i++) {
      ids.add(new User(USER_MOCK_DATA).animationId)
    }
    expect(ids.size).to.be.eql(trials)
  })
  it('fullname method should retrun user\'s full name', () => {
    let mockedUser = new User(USER_MOCK_DATA)
    expect(mockedUser.fullname()).to.be.eql('Dr House')
  })
  it('includes method should check on all keys in user object', () => {
    let mockedUser = new User(USER_MOCK_DATA)
    expect(mockedUser.includes('Dr')).to.be.true
    expect(mockedUser.includes('House')).to.be.true
    expect(mockedUser.includes('01010')).to.be.true
    expect(mockedUser.includes('x.x@')).to.be.true
    expect(mockedUser.includes('hotmail')).to.be.true
    expect(mockedUser.includes('susan')).to.be.false
  })
  it('save method should update user info', () => {
    let mockedUser = new User(USER_MOCK_DATA)
    mockedUser.editInfo.firstName = 'not a Dr'
    mockedUser.save()
    expect(mockedUser.info.firstName).to.be.eql(mockedUser.editInfo.firstName)
    expect(mockedUser.includes('not a')).to.be.true
  })
})
