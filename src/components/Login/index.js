import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import SavedContext from '../../context/SavedContext'

import {
  LoginContainer,
  FormConatiner,
  ImageElement,
  LabelAndInputConatiner,
  InputElement,
  LabelElement,
  LoginButton,
  ErrorMsg,
} from './StyledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    isChecked: false,
  }

  changeUsername = event => this.setState({username: event.target.value})

  changePassword = event => this.setState({password: event.target.value})

  toggleCheckBox = () => this.setState(prev => ({isChecked: !prev.isChecked}))

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  getLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg, showErrorMsg, isChecked} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <SavedContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <LoginContainer isDarkMode={isDarkMode}>
              <FormConatiner onSubmit={this.getLogin} isDarkMode={isDarkMode}>
                {isDarkMode ? (
                  <ImageElement
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <ImageElement
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                )}
                <LabelAndInputConatiner>
                  <LabelElement htmlFor="username" isDarkMode={isDarkMode}>
                    USERNAME
                  </LabelElement>

                  <InputElement
                    id="username"
                    placeholder="Username"
                    type="text"
                    onChange={this.changeUsername}
                    value={username}
                    isDarkMode={isDarkMode}
                  />
                </LabelAndInputConatiner>
                <LabelAndInputConatiner>
                  <LabelElement htmlFor="password" isDarkMode={isDarkMode}>
                    PASSWORD
                  </LabelElement>

                  <InputElement
                    id="password"
                    placeholder="Password"
                    type={`${isChecked ? 'text' : 'password'}`}
                    value={password}
                    onChange={this.changePassword}
                    isDarkMode={isDarkMode}
                  />
                </LabelAndInputConatiner>
                <LabelAndInputConatiner checkBoxElement>
                  <InputElement
                    id="showPassword"
                    type="checkbox"
                    checkBoxElement
                    onChange={this.toggleCheckBox}
                    isDarkMode={isDarkMode}
                  />
                  <LabelElement
                    checkBoxLabel
                    htmlFor="showPassword"
                    isDarkMode={isDarkMode}
                  >
                    Show Password
                  </LabelElement>
                </LabelAndInputConatiner>
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FormConatiner>
            </LoginContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Login
