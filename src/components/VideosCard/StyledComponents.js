import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavigateLink = styled(Link)`
  text-decoration: none;
`
export const VideoConatiner = styled.li`
  list-stye-type: none;
  margin-right: 12px;
  margin-bottom: 17px;
  width: 200px;
  @media (max-width: 575px) {
    width: 100%;
  }
`

export const ImageElement = styled.img`
  height: 100px;
  width: 200px;
  margin-bottom: 10px;
  @media (max-width: 575px) {
    height: 150px;
    width: 50%;
  }
  @media (max-width: 767px) {
    height: 150px;
    width: 100%;
  }
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 20px;
  margin-right: 10px;
`
export const VideoTitle = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#323f4b')};
  margin: 0;
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 10px;
`
export const ChannelViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 10px;
  margin: 0;
`
export const ViewsAndDateContainer = styled.div`
  display: flex;
  gap: 10px;
`
