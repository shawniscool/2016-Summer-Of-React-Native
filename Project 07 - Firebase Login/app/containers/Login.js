'use strict'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import React, { Component, PropTypes} from 'react'
import LoginRender from '../components/LoginRender'

import { REGISTER,
         LOGIN,
         FORGOT_PASSWORD } from '../lib/constants';

import * as authActions from '../actions/authActions';

import { Map } from 'immutable'

const actions = [
  authActions
]

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  const creators = Map()
                  .merge(...actions)
                  .filter(value => typeof value === 'function')
                  .toObject();
  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  }
}

function buttonPressHandler(login, username, password) {
  login(username, password)
}

class Login extends Component {
  render () {
    let loginButtonText = 'Log in';
    let onButtonPress = buttonPressHandler.bind(null,
                        this.props.actions.login,
                        this.props.auth.form.fields.username,
                        this.props.auth.form.fields.password
                        )

    return (
      <LoginRender
        formType={ LOGIN }
        onButtonPress={ onButtonPress }
        auth={ this.props.auth }
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)