export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}

export function selectProjectRequest() {
  return {
    type: '@user/SELECT_PROJECT_REQUEST',
  };
}

export function selectProjectSuccess(project) {
  return {
    type: '@user/SELECT_PROJECT_SUCCESS',
    payload: { project },
  };
}

export function selectProjectFailure() {
  return {
    type: '@user/SELECT_PROJECT_FAILURE',
  };
}

export function clearProject() {
  return {
    type: '@user/CLEAR_PROJECT',
  };
}
