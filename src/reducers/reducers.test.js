import movieReducer from './movieReducer';
import * as actions from '../actions/index.js'

describe('reducers', () => {
  describe('movieReducer', () => {
    it('should return the default state', () => {
      const expected = []
      expect(movieReducer(undefined, {})).toEqual(expected)
    })

    it('should return a state with movies when given ADD_MOVIES action', () => {
      const movies = [ { title: 'Black Panther'} ];
      const expected = [ { title: 'Black Panther'} ];
      expect(movieReducer(undefined, actions.addMovies(movies))).toEqual(expected)
    })   
  })
})