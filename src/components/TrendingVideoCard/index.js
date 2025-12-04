import {formatDistanceToNow} from 'date-fns'
import SavedContext from '../../context/SavedContext'
import {
  VideoConatiner,
  ImageElement,
  VideoDescriptionContainer,
  DescriptionContainer,
  ProfileImage,
  VideoTitle,
  ChannelViewsAndDate,
  ViewsAndDateContainer,
  NavigateLink,
  ChannelName,
} from './StyledComponents'

const TrendingVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    channel,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails

  return (
    <SavedContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <NavigateLink to={`/videos/${id}`}>
            <VideoConatiner>
              <ImageElement src={thumbnailUrl} alt="video thumbnail" />
              <VideoDescriptionContainer>
                <ProfileImage
                  src={channel.profile_image_url}
                  alt="channel logo"
                />
                <DescriptionContainer>
                  <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
                  <ChannelName isDarkMode={isDarkMode}>
                    {channel.name}
                  </ChannelName>
                  <ViewsAndDateContainer>
                    <ChannelViewsAndDate
                      isDarkMode={isDarkMode}
                    >{`${viewCount} views`}</ChannelViewsAndDate>
                    <ChannelViewsAndDate isDarkMode={isDarkMode}>{`${
                      formatDistanceToNow(new Date(publishedAt)).split(' ')[1]
                    } years ago`}</ChannelViewsAndDate>
                  </ViewsAndDateContainer>
                </DescriptionContainer>
              </VideoDescriptionContainer>
            </VideoConatiner>
          </NavigateLink>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default TrendingVideoCard
