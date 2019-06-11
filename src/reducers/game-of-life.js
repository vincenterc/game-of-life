import { SET_GAME_OF_LIFE_STATE } from './action-types'

const initialState = {
  playing: false,
  refresh: () => {},
  play: () => {},
  pause: () => {},
  stop: () => {},
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_GAME_OF_LIFE_STATE:
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}
