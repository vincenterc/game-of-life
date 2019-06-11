import * as actionTypes from './reducers/action-types'

export default function(dispatch) {
  return {
    setGameOfLifeState: state => {
      dispatch({
        type: actionTypes.SET_GAME_OF_LIFE_STATE,
        payload: state,
      })
    },
  }
}
