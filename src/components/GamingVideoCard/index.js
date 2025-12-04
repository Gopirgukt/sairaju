import {
  VideoConatiner,
  ImageElement,
  DescriptionContainer,
  VideoTitle,
  ChannelViewsAndDate,
  NavigateLink,
} from './StyledComponents'

import SavedContext from '../../context/SavedContext'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = videoDetails

  return (
    <SavedContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <NavigateLink to={`/videos/${id}`}>
            <VideoConatiner>
              <ImageElement src={thumbnailUrl} alt="video thumbnail" />
              <DescriptionContainer>
                <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
                <ChannelViewsAndDate
                  isDarkMode={isDarkMode}
                >{`${viewCount} Watching Worldwide`}</ChannelViewsAndDate>
              </DescriptionContainer>
            </VideoConatiner>
          </NavigateLink>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default GamingVideoCard
