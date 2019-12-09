export function createProjectRequest(name, host, description) {
  return {
    type: '@project/CREATE_PROJECT_REQUEST',
    payload: { name, host, description },
  };
}

export function createProjectSuccess() {
  return {
    type: '@project/CREATE_PROJECT_SUCCESS',
  };
}

export function createProjectFailure() {
  return {
    type: '@project/CREATE_PROJECT_FAILURE',
  };
}
