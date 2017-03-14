/**
 * Created by amgadserry on 09/03/17.
 */

export default class User {
  static FindAll () {
    return new Promise((resolve) => {
      setTimeout(() => resolve([
        {
          id: '1',
          firstName: 'Dr',
          lastName: 'House',
          phone: '010100000',
          email: 'x.x@hotmail.com',
          image: 'https://s-media-cache-ak0.pinimg.com/originals/da/63/86/da6386ea022e254dbed22c9ff5495b2a.jpg'
        },
        {
          id: '2',
          firstName: 'palm',
          lastName: 'face',
          phone: '010100000',
          email: 'y.y@hotmail.com',
          image: 'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg'
        },
        {
          id: '3',
          firstName: 'whity',
          lastName: 'white',
          phone: '010100000',
          email: 'z.z@hotmail.com',
          image: 'http://dreamicus.com/data/face/face-01.jpg'
        },
        {
          id: '4',
          firstName: 'Dr',
          lastName: 'House',
          phone: '010100000',
          email: 'x.x@hotmail.com',
          image: 'https://s-media-cache-ak0.pinimg.com/originals/da/63/86/da6386ea022e254dbed22c9ff5495b2a.jpg'
        },
        {
          id: '5',
          firstName: 'palm',
          lastName: 'face',
          phone: '010100000',
          email: 'y.y@hotmail.com',
          image: 'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg'
        },
        {
          id: '6',
          firstName: 'whity',
          lastName: 'white',
          phone: '010100000',
          email: 'z.z@hotmail.com',
          image: 'http://dreamicus.com/data/face/face-01.jpg'
        },
        {
          id: '7',
          firstName: 'Dr',
          lastName: 'House',
          phone: '010100000',
          email: 'x.x@hotmail.com',
          image: 'https://s-media-cache-ak0.pinimg.com/originals/da/63/86/da6386ea022e254dbed22c9ff5495b2a.jpg'
        },
        {
          id: '8',
          firstName: 'palm',
          lastName: 'face',
          phone: '010100000',
          email: 'y.y@hotmail.com',
          image: 'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg'
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
