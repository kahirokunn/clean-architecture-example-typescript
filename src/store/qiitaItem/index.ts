import {IInitialState, initialState} from './state';
import {Types} from './types';

const reducer = (state=initialState(), action: FluxStandardAction): IInitialState => {
  switch (action.type) {
    case Types.INIT_STATE:
      return initialState()
    case Types.SAVE_ITEMS:
      return Object.assign({}, state, {qiitaItems: action.payload})
    default:
      return state;
  }
}

export default reducer
