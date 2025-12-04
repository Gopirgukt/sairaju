import {formatDistanceToNow} from 'date-fns'
import SavedContext from '../../context/SavedContext'
import {
  VideoConatiner,
  ImageElement,
  VideoDescriptionContainer,
  DescriptionContainer,
  ProfileImage,
  VideoTitle,
  ChannelName,
  ChannelViewsAndDate,
  ViewsAndDateContainer,
  NavigateLink,
} from './StyledComponents'

const VideosCard = props => {
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
                <DescriptionContainer isDarkMode={isDarkMode}>
                  <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
                  <ChannelName>{channel.name}</ChannelName>
                  <ViewsAndDateContainer>
                    <ChannelViewsAndDate>{`${viewCount} views`}</ChannelViewsAndDate>
                    <ChannelViewsAndDate>{`${
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

export default VideosCard
