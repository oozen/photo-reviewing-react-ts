import { combineReducers } from 'redux';

import randomPhotoReducer from './photoReducer';

const rootReducer = combineReducers({
  photo: randomPhotoReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
