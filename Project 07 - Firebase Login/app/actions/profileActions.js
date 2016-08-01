'use strict';

import {
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,
} from '../lib/constants'

import { Actions } from 'react-native-router-flux'
import BackendFactory from '../lib/BackendFactory'

export function profileUpdateRequest() {
  return {
    type: PROFILE_UPDATE_REQUEST
  };
}
export function profileUpdateSuccess() {
  return {
    type: PROFILE_UPDATE_SUCCESS
  };
}
export function profileUpdateFailure(json) {
  return {
    type: PROFILE_UPDATE_FAILURE,
    payload: json
  };
}


export function updateProfile(username, email) {
  return dispatch => {
    dispatch(profileUpdateRequest())
    return BackendFactory().updateProfile(1,
      {
        username: username,
        email: email
      })
      .then(() => {
        dispatch(profileUpdateSuccess())
      })
      .catch((error) => {
        dispatch(profileUpdateFailure(error))
      })
  }
}