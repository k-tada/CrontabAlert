import { fork } from 'redux-saga/effects';

function* preprocessor() {
  console.log( 'init' );
}

export default function* rootSaga() {
  yield fork( preprocessor );
}
