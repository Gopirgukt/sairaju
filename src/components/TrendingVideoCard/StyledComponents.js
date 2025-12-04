import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavigateLink = styled(Link)`
  text-decoration: none;
`
export const VideoConatiner = styled.li`
  list-stye-type: none;
  margin-bottom: 50px;
  display: flex;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
  }
`

export const ImageElement = styled.img`
  height: 100px;
  width: 200px;
  margin-right: 10px;
  @media (max-width: 576px) {
    height: 150px;
    width: 100%;
    margin-bottom: 20px;
  }
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 20px;
  margin-right: 10px;
`
export const VideoTitle = styled.p`
  font-family: Roboto;
  font-size: 17px;
  font-weight: 700;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#323f4b')};
  margin: 0;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
`
export const ChannelViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
`
export const ViewsAndDateContainer = styled.div`
  display: flex;
  gap: 10px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#323f4b')};
`
