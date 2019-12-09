/* eslint-disable prefer-object-spread */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

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

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
