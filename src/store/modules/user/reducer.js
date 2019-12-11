import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  project: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@user/SELECT_PROJECT_SUCCESS': {
        draft.project = action.payload.project;
        break;
      }
      case '@user/CLEAR_PROJECT': {
        draft.project = null;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        draft.project = null;
        break;
      }
      default:
    }
  });
}
