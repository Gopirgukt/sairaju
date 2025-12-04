import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'

export const RenderLoader = styled(Loader)`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`
export const VideoItemDetailsContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  width: 100%;
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const FilterGroupContainer = styled.div`
  @media (max-width: 767px) {
    display: ${props => (props.showSideBar ? 'block' : 'none')};
  }
  @media (min-width: 768px) {
    display: block;
  }
`

export const ImageElement = styled.img`
  height: 100px;
  width: 200px;
  margin-bottom: 10px;
`

export const VideoDescriptionContainer = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
  }
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
  @media (max-width: 320px) {
    font-size: 15px;
  }
`

export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
  margin: 0;
`
export const HorizontalRule = styled.hr`
  border: ${props =>
    props.isDarkMode ? '1px solid #f0f0f0' : '1px solid #323f4b'};
  margin-bottom: 15px;
  width: 82vw;
`
export const Description = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
`

export const ChannelViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
  margin: 0;
`

export const ReactPlayerElement = styled(ReactPlayer)`
  height: 500px !important;

  @media (max-width: 1200px) {
    height: 400px !important;
  }

  @media (max-width: 768px) {
    height: 350px !important;
  }

  @media (max-width: 480px) {
    height: 250px !important;
  }
  @media (max-width: 320px) {
    height: 200px !important;
  }
`

export const LikeSaveChannelViewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelViewsAndDateContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const ChannelViewsAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LikeSaveContainer = styled.div`
  display: flex;
  gap: 15px;
`

export const CustomButton = styled.button`
  height: 100px;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;

  color: ${props => {
    if (props.isLiked || props.isDisliked || props.isSaved) {
      return '#2563eb'
    }
    return props.isDarkMode ? '#ffffff' : '#64748b'
  }};

  min-width: 80px;
  justify-content: center;
  gap: 5px;
  margin: 0;
`

export const VideoDetailsWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const ResultsWrapperContainer = styled.div`
  display: flex;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
