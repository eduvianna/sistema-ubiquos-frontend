/* eslint-disable prefer-object-spread */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  updateProfileSuccess,
  updateProfileFailure,
  selectProjectSuccess,
  selectProjectFailure,
} from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar, ...rest } = payload.data;
    const profile = Object.assign(
      { name, email, avatar_id: avatar },

      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'update-user', profile);

    toast.success('Perfil atualizado com sucesso');

    return yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar seu perfil, confira seus dados');

    return yield put(updateProfileFailure());
  }
}

export function* selectProject() {
  try {
    const response = yield call(api.get, 'list-projects');
    const projects = [];
    response.data.map(
      element => element.sensors.length > 0 && projects.push(element)
    );
    const index = Math.floor(Math.random() * projects.length);
    return yield put(selectProjectSuccess(projects[index]));
  } catch (err) {
    toast.error(
      'Não foi possível coletar algumas informações dos seus projetos'
    );
    return yield put(selectProjectFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/SELECT_PROJECT_REQUEST', selectProject),
]);
