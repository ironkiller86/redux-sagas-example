import { call, put, all, takeLatest, takeEvery } from "redux-saga/effects";
import { httpCallFake, addContact, toggleSpinner } from "./actionsCreator";

export function* addContactSaga({
  payload,
}: ReturnType<typeof addContact>): any {
  yield put(toggleSpinner(true));
  const resp = yield call(httpCallFake);
  console.log("addContactSaga - response", resp);
  yield put(addContact(payload));
  yield put(toggleSpinner(false));
}
