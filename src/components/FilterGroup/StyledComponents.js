import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavigateLink = styled(Link)`
  text-decoration: none;
`

export const CategoriesContainer = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`
export const CategoryItem = styled.li`
  list-style-type: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#323f4b')};
  font-size: 12px;
  background-color: ${props => {
    if (props.isActive && props.isDarkMode) {
      return '#64748b'
    }
    if (props.isActive && !props.isDarkMode) {
      return '#f1f5f9'
    }
    return 'transparent'
  }};
  height: 30px;
  margin-bottom: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px;
  border-radius: 5px;
`
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 93vh;
  background-color: ${props => (props.isDarkMode ? '#475569' : '#ffffff')};
  padding: 15px;

  @media (max-width: 767px) {
    width: 165px;
    height: 100vh;
    position: absolute;
  }
`
export const ContactUsHeading = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#323f4b')};
  font-size: 15px;
  font-family: Roboto;
  font-weight: 900;
`
export const ImageLogoContainer = styled.div`
  display: flex;
`
export const ImageLogo = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 10px;
`
export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const GreetingMsg = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#323f4b')};
  font-size: 13px;
  font-family: Roboto;
`
