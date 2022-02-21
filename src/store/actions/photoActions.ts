import * as Types from './actionTypes';
import { TPhoto } from '../../api/models';

// Fetch random photo
export interface IFetchRandomPhotoAction {
  type: typeof Types.FETCH_RANDOM_PHOTO;
}

export const fetchRandomPhoto = (): IFetchRandomPhotoAction => ({
  type: Types.FETCH_RANDOM_PHOTO,
});

export interface IFetchRandomPhotoSuccessAction {
  type: typeof Types.FETCH_RANDOM_PHOTO_SUCCESS;
  payload: TPhoto;
}

export interface IFetchRandomPhotoFailureAction {
  type: typeof Types.FETCH_RANDOM_PHOTO_FAILURE;
  error: string;
}

// Approve photo
export interface IApprovePhotoAction {
  type: typeof Types.APPROVE_PHOTO;
  photo: TPhoto;
}

export const approvePhoto= (photo: TPhoto): IApprovePhotoAction => ({
  type: Types.APPROVE_PHOTO,
  photo,
});

export interface IApprovePhotoSuccessAction {
  type: typeof Types.APPROVE_PHOTO_SUCCESS;
  payload: TPhoto;
}

// Decline photo
export interface IDeclinePhotoAction {
  type: typeof Types.DECLINE_PHOTO;
  id: string;
}

export const declinePhoto = (id: string): IDeclinePhotoAction => ({
  type: Types.DECLINE_PHOTO,
  id,
});

export interface IDeclinePhotoSuccessAction {
  type: typeof Types.DECLINE_PHOTO_SUCCESS;
  payload: string;
}

export type RandomPhotoAction =
  | IFetchRandomPhotoAction
  | IFetchRandomPhotoSuccessAction
  | IFetchRandomPhotoFailureAction
  | IApprovePhotoAction
  | IApprovePhotoSuccessAction
  | IDeclinePhotoAction
  | IDeclinePhotoSuccessAction;
