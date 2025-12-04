import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavigateLink = styled(Link)`
  text-decoration: none;
`
export const VideoConatiner = styled.li`
  list-stye-type: none;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const ImageElement = styled.img`
  height: 120px;
  width: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
  @media (max-width: 576px) {
    height: 100px;
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 280px;
    height: 160px;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: #323f4b;
  gap: 10px;
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
`

export const VideoTitle = styled.p`
  font-family: Roboto;
  font-size: 17px;
  font-weight: 700;
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
  margin: 2px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`
