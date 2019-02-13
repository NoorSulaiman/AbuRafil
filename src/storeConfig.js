import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import contentReducer from './reducers/contentReducer';

export default function configureStore() {
  return createStore(
    contentReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
