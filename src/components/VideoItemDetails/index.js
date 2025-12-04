import {Component} from 'react'

import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import FilterGroup from '../FilterGroup'
import Header from '../Header'

import SavedContext from '../../context/SavedContext'

import {
  VideoItemDetailsContainer,
  VideoDescriptionContainer,
  DescriptionContainer,
  ProfileImage,
  VideoTitle,
  ChannelName,
  ChannelViewsAndDate,
  ChannelViewsAndDateContainer,
  LikeSaveContainer,
  LikeSaveChannelViewsContainer,
  ChannelViewsAndDescriptionContainer,
  VideoDetailsWrapperContainer,
  CustomButton,
  ResultsWrapperContainer,
  LoaderContainer,
  RenderLoader,
  Description,
  HorizontalRule,
  FilterGroupContainer,
  ReactPlayerElement,
} from './StyledComponents'

class VideoItemDetails extends Component {
  state = {
    videoData: {},
    isLiked: false,
    isDisliked: false,
    isSaved: false,
    isLoading: true,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formattedData = data => ({
    id: data.id,
    channel: data.channel,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
    videoUrl: data.video_url,
    description: data.description,
  })

  getVideoDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {id} = match.params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.formattedData(data.video_details)
      this.setState({videoData: updatedData, isLoading: false})
    }
  }

  renderLoadingView = () => (
    <SavedContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <LoaderContainer data-testid="loader">
            <RenderLoader
              isDarkMode={isDarkMode}
              type="ThreeDots"
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </SavedContext.Consumer>
  )

  renderVideoDetailsView = () => (
    <SavedContext.Consumer>
      {value => {
        const {addSavedVideos, isDarkMode} = value
        const {videoData, isDisliked, isLiked, isSaved} = this.state
        const {
          channel,
          publishedAt,
          title,
          viewCount,
          videoUrl,
          description,
        } = videoData

        const onAddSavedVideos = () => {
          addSavedVideos(videoData)
          this.setState(prev => ({isSaved: !prev.isSaved}))
        }

        const changeLiked = () =>
          this.setState(prev => ({isLiked: !prev.isLiked, isDisliked: false}))

        const changeDisLiked = () =>
          this.setState(prev => ({
            isDisliked: !prev.isDisliked,
            isLiked: false,
          }))

        return (
          <VideoDetailsWrapperContainer>
            <ReactPlayerElement url={videoUrl} width="100%" />
            <VideoDescriptionContainer>
              <DescriptionContainer>
                <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
                <LikeSaveChannelViewsContainer>
                  <ChannelViewsAndDateContainer>
                    <ChannelViewsAndDate isDarkMode={isDarkMode}>
                      {`${viewCount} views`}
                    </ChannelViewsAndDate>
                    <ChannelViewsAndDate isDarkMode={isDarkMode}>{`${
                      formatDistanceToNow(new Date(publishedAt)).split(' ')[1]
                    } years ago`}</ChannelViewsAndDate>
                  </ChannelViewsAndDateContainer>
                  <LikeSaveContainer>
                    <CustomButton
                      type="button"
                      onClick={changeLiked}
                      isLiked={isLiked}
                      isDarkMode={isDarkMode}
                    >
                      <AiOutlineLike />
                      <span>Like</span>
                    </CustomButton>
                    <CustomButton
                      type="button"
                      onClick={changeDisLiked}
                      isDisliked={isDisliked}
                      isDarkMode={isDarkMode}
                    >
                      <AiOutlineDislike />
                      <span>DisLike</span>
                    </CustomButton>
                    <CustomButton
                      type="button"
                      onClick={onAddSavedVideos}
                      isSaved={isSaved}
                      isDarkMode={isDarkMode}
                    >
                      <MdPlaylistAdd />
                      {isSaved ? 'Saved' : 'Save'}
                    </CustomButton>
                  </LikeSaveContainer>
                </LikeSaveChannelViewsContainer>

                <HorizontalRule isDarkMode={isDarkMode} />

                <ChannelViewsAndDateContainer>
                  {channel.profile_image_url && (
                    <ProfileImage
                      src={channel.profile_image_url}
                      alt="channel logo"
                    />
                  )}
                  <ChannelViewsAndDescriptionContainer>
                    <ChannelName isDarkMode={isDarkMode}>
                      {channel.name}
                    </ChannelName>
                    <ChannelViewsAndDate isDarkMode={isDarkMode}>
                      {`${channel.subscriber_count} subscribers`}
                    </ChannelViewsAndDate>
                    <Description isDarkMode={isDarkMode}>
                      {description}
                    </Description>
                  </ChannelViewsAndDescriptionContainer>
                </ChannelViewsAndDateContainer>
              </DescriptionContainer>
            </VideoDescriptionContainer>
          </VideoDetailsWrapperContainer>
        )
      }}
    </SavedContext.Consumer>
  )

  render() {
    return (
      <SavedContext.Consumer>
        {value => {
          const {
            isDarkMode,
            changeCategory,
            activeCategoryId,
            categoriesList,
            showSideBar,
          } = value

          const {isLoading} = this.state

          return (
            <>
              <Header />
              <ResultsWrapperContainer>
                <FilterGroupContainer showSideBar={showSideBar}>
                  <FilterGroup
                    changeCategory={changeCategory}
                    categoriesList={categoriesList}
                    activeCategoryId={activeCategoryId}
                    isDarkMode={isDarkMode}
                  />
                </FilterGroupContainer>
                <VideoItemDetailsContainer
                  data-testid="videoItemDetails"
                  isDarkMode={isDarkMode}
                >
                  {isLoading
                    ? this.renderLoadingView()
                    : this.renderVideoDetailsView()}
                </VideoItemDetailsContainer>
              </ResultsWrapperContainer>
            </>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default VideoItemDetails
