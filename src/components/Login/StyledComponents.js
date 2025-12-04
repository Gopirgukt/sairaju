import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#000000' : '#ffffff')};
`
export const FormConatiner = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: ${props => (props.isDarkMode ? '#475569' : 'ffffff')};
  @media (max-width: 320px) {
    width: 200px;
  }
  @media (max-width: 767px) {
    width: 300px;
  }
`
export const ImageElement = styled.img`
  height: 30px;
  width: 110px;
  align-self: center;
  margin-bottom: 10px;
`
export const LabelAndInputConatiner = styled.div`
  display: flex;
  flex-direction: ${props => (props.checkBoxElement ? 'row' : 'column')};
  align-items: ${props => (props.checkBoxElement ? 'center' : 'flex-start')};
  gap: ${props => (props.checkBoxElement ? '1px' : '4px')};
  margin-bottom: 10px;
  @media (max-width: 767px) {
    width: 200px;
  }
`

export const InputElement = styled.input`
  height: ${props => (props.checkBoxElement ? '14px' : '30px')};
  width: ${props => (props.checkBoxElement ? '14px' : '300px')};
  border-radius: 5px;
  border: solid 1px #323f4b;
  background-color: transparent;
  @media (max-width: 767px) {
    width: ${props => (props.checkBoxElement ? '14px' : '200px')};
    height: ${props => (props.checkBoxElement ? '14px' : '26px')};
    border-radius: 5px;
    border: ${props =>
      props.isDarkMode ? 'solid 1px #ffffff' : 'solid 1px #323f4b'};
    font-size: 12px;
  }
`
export const LabelElement = styled.label`
  font-size: 13px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#323f4b')};
  font-family: Roboto;
  margin-bottom: 5px;
  width: 100px;
  position: ${props => (props.checkBoxLabel ? 'relative' : 'static')};
  top: ${props => (props.checkBoxLabel ? '2px' : '0')};
  @media (max-width: 767px) {
    font-size: 11px;
  }
`
export const LoginButton = styled.button`
  color: #ffffff;
  height: 30px;
  width: 300px;
  border-radius: 5px;
  background-color: #4f46e5;
  font-size: 12px;
  border: none;
  @media (max-width: 767px) {
    height: 26px;
    width: 200px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`
export const ErrorMsg = styled.p`
  font-size: 12px;
  color: red;
  @media (max-width: 767px) {
    font-size: 10px;
  }
`
