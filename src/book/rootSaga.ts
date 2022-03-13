import { all, fork, takeEvery, takeLatest } from "redux-saga/effects";
import { addContactSaga } from "./redux/sagas";

export default function* rootSaga() {
  yield all([takeEvery("ADD_ASYNC_CONTACT", addContactSaga)]);
}
