import { DATA_FETCHED } from '../types';

import Data from './data';

export default function contentReducer(state = { Data }, actions = {}) {
  switch (actions.type) {
    case DATA_FETCHED:
      state.data = actions.data;
      return state;
    default:
      return state;
  }
}
