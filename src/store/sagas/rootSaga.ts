import { AxiosResponse } from 'axios';
import { call, put, all, takeEvery } from 'redux-saga/effects';
import * as API from '../../api/services';
import * as Types from '../actions/actionTypes';
import { TApprovePhotoParam, TDeclinePhotoParam } from '../../api/models';

function* fetchRandomPhotoSaga() {
  try {
    const response: AxiosResponse = yield call(API.getRandomPhoto);
    yield put({ type: Types.FETCH_RANDOM_PHOTO_SUCCESS, payload: response.data });
  } catch (e: any) {
    yield put({ type: Types.FETCH_RANDOM_PHOTO_FAILURE, error: e.message });
  }
}

function* approvePhotoSaga({ photo }: TApprovePhotoParam) {
  yield put({ type: Types.APPROVE_PHOTO_SUCCESS, payload: photo });
}

function* declinePhotoSaga({ id }: TDeclinePhotoParam) {
  yield put({ type: Types.DECLINE_PHOTO_SUCCESS, payload: id });
}

export default function* rootSaga() {
  yield all([takeEvery(Types.FETCH_RANDOM_PHOTO, fetchRandomPhotoSaga), takeEvery(Types.APPROVE_PHOTO, approvePhotoSaga), takeEvery(Types.DECLINE_PHOTO, declinePhotoSaga)]);
}
