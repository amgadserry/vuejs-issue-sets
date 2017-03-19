/**
 * Created by amgadserry on 09/03/17.
 */

export default class User {
  static findAll () {
    return new Promise((resolve) => {
      setTimeout(() => resolve([
        {
          id: '1',
          firstName: 'Dr',
          lastName: 'House',
          phone: '010100000',
          email: 'x.x@hotmail.com',
          image: 'https://s-media-cache-ak0.pinimg.com/originals/da/63/86/da6386ea022e254dbed22c9ff5495b2a.jpg',
          managers_ids: [],
          employees_ids: ['2', '3', '4']
        },
        {
          id: '2',
          firstName: 'palm',
          lastName: 'face',
          phone: '010100000',
          email: 'y.y@hotmail.com',
          image: 'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg',
          managers_ids: ['1'],
          employees_ids: ['5']
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
        },
        {
          id: '4',
          firstName: 'Dr',
          lastName: 'House',
          phone: '010100000',
          email: 'x.x@hotmail.com',
          image: 'https://s-media-cache-ak0.pinimg.com/originals/da/63/86/da6386ea022e254dbed22c9ff5495b2a.jpg',
          managers_ids: ['1'],
          employees_ids: []
        },
        {
          id: '5',
          firstName: 'Dr',
          lastName: 'House',
          phone: '010100000',
          email: 'x.x@hotmail.com',
          image: 'https://s-media-cache-ak0.pinimg.com/originals/da/63/86/da6386ea022e254dbed22c9ff5495b2a.jpg',
          managers_ids: ['2'],
          employees_ids: []
        }
      ]), 1000)
    })
  }
  static delete (data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({state: 'success'})
      }, 1000)
    })
  }
}
