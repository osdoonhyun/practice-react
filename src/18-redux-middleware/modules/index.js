import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
// import { all } from 'redux-saga/effects';
// import sample, { sampleSaga } from './sample';
// import loading from './loading';

const rootReducer = combineReducers({
  counter,
  // sample,
  // loading
});

// export function* rootSaga() {
//   // all 함수는 여러 사가를 합쳐주는 역할을 합니다.
//   yield all([counterSaga(), sampleSaga()]);
// }

export default rootReducer;
