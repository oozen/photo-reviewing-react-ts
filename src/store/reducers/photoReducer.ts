import * as Types from '../actions/actionTypes';
import { TPhoto, initialPhoto } from '../../api/models';
import * as actions from '../actions/photoActions';

interface IState {
  approvedList: TPhoto[];
  declinedList: string[];
  randomPhoto: TPhoto;
  loading: boolean;
  error: string;
}

const initialState: IState = {
  approvedList: [],
  declinedList: [],
  randomPhoto: initialPhoto,
  loading: false,
  error: '',
};

export default function randomPhotoReducer(state: IState = initialState, action: actions.RandomPhotoAction): IState {
  switch (action.type) {
    case Types.FETCH_RANDOM_PHOTO:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case Types.FETCH_RANDOM_PHOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        randomPhoto: action.payload,
      };
    case Types.FETCH_RANDOM_PHOTO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case Types.APPROVE_PHOTO:
      return {
        ...state,
      };
    case Types.APPROVE_PHOTO_SUCCESS:
      const approvedList: any = state.approvedList;
      approvedList.push(action.payload);
      return {
        ...state,
        approvedList,
        randomPhoto: initialState.randomPhoto,
      };
    case Types.DECLINE_PHOTO:
      return {
        ...state,
      };
    case Types.DECLINE_PHOTO_SUCCESS:
      const declinedList: any = state.declinedList;
      declinedList.push(action.payload);
      return {
        ...state,
        declinedList,
        randomPhoto: initialState.randomPhoto,
      };
    default:
      return state;
  }
}
