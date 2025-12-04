import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'

export const HamburgerIcon = styled(GiHamburgerMenu)`
  color: ${props => (props.$isDarkMode ? '#ffffff' : '#000000')};
  font-size: 21px;
  @media (min-width: 767px) {
    display: none;
  }
`

export const NavHeaderMd = styled.nav`
  background-color: ${props => (props.isDarkMode ? '#475569' : '#ffffff')};
  @media (max-width: 767px) {
    display: none;
  }
`
export const NavHeaderSm = styled.nav`
  background-color: ${props => (props.isDarkMode ? '#475569' : '#ffffff')};

  @media (min-width: 768px) {
    display: none;
  }
`
export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
  @media (max-width: 768px) {
    height: 50px;
  }
`
export const ImageElement = styled.img`
  height: 30px;
  width: 110px;
  @media (max-width: 768px) {
    height: 23px;
    width: 76px;
  }
`
export const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`
export const NavItem = styled.li`
  list-style-type: none;
  margin-right: 10px;
  font-size: 14px;
`
export const LogoutButton = styled.button`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#475569')};
  height: 30px;
  width: 100px;
  border-radius: 5px;
  background-color: transparent;
  font-size: 12px;
  border: ${props =>
    props.isDarkMode ? '1px solid #ffffff' : '1px solid #4f46e5'};

  @media (max-width: 767px) {
    height: 24px;
    width: 24px;
    font-size: 24px;
    border: none;
  }
`

export const NavButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
`
export const NavButtonImage = styled.img`
  height: 24px;
  width: 24px;
  @media (max-width: 767px) {
    display: none;
  }
`

export const PopUpCards = styled.div`
  background-color: ${props => (props.isDarkMode ? '#475569' : '#ffffff')};
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`

export const AlertHeader = styled.p`
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
  font-size: 16px;
  font-family: Roboto;
  margin-bottom: 20px;
`
export const CustomButton = styled.button`
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
  background-color: ${props => (props.confirm ? '#3b82f6' : 'transparent')};
  border: ${props => {
    if (props.confirm) {
      return 'none'
    }
    return props.isDarkMode ? 'solid 1px #f0f0f0' : 'solid 1px #323f4b'
  }};

  font-size: 13px;
  margin-right: 10px;
  height: 30px;
  width: 90px;
  border-radius: 5px;
`
