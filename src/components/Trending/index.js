import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import SavedContext from '../../context/SavedContext'
import TrendingVideoCard from '../TrendingVideoCard'
import FilterGroup from '../FilterGroup'
import Header from '../Header'

import {
  TrendingHeader,
  TrendingVideosContainer,
  TrendingVideosListContainer,
  FailureViewContainer,
  FailureImageElement,
  FailureViewHeader,
  FailureViewMessage,
  TrendingWrapperContainer,
  LoaderContainer,
  RetryButton,
  ResultsWrapperContainer,
  RenderLoader,
  FilterGroupContainer,
} from './StyledComponents'

const apiStatusConstants = {
  intial: 'INITIAL',
  apiSuccessView: 'SUCCESS',
  apiFaliureView: 'FAILURE',
  apiLoadingView: 'LOADING',
  apiNoResultsView: 'NO RESULTS',
}

class Trending extends Component {
  state = {
    trendingList: [],
    apiStatus: apiStatusConstants.intial,
  }

  componentDidMount = () => {
    this.getVideos()
  }

  formattedData = data => ({
    id: data.id,
    channel: data.channel,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.apiLoadingView})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachData =>
        this.formattedData(eachData),
      )
      this.setState({
        trendingList: updatedData,
        apiStatus: apiStatusConstants.apiSuccessView,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.apiFaliureView})
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

  renderFinalResultsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.apiFaliureView:
        return this.renderFailureView()
      case apiStatusConstants.apiLoadingView:
        return this.renderLoadingView()
      case apiStatusConstants.apiSuccessView:
        return this.renderTrendingResultsView()
      default:
        return null
    }
  }

  renderFailureView = () => (
    <SavedContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <FailureViewContainer>
            {isDarkMode ? (
              <FailureImageElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
            ) : (
              <FailureImageElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure view"
              />
            )}
            <FailureViewHeader isDarkMode={isDarkMode}>
              Oops! Something Went Wrong
            </FailureViewHeader>
            <FailureViewMessage isDarkMode={isDarkMode}>
              We are having some trouble to complete your request.
              <br />
              Please try again.
            </FailureViewMessage>
            <RetryButton onClick={this.getVideos}>Retry</RetryButton>
          </FailureViewContainer>
        )
      }}
    </SavedContext.Consumer>
  )

  renderTrendingResultsView = () => {
    const {trendingList} = this.state

    return (
      <SavedContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <TrendingWrapperContainer>
              <TrendingHeader isDarkMode={isDarkMode}>
                <FaFire style={{marginRight: '8px', color: '#ff0000'}} />
                Trending
              </TrendingHeader>
              <TrendingVideosListContainer>
                {trendingList.map(eachVideo => (
                  <TrendingVideoCard
                    key={eachVideo.id}
                    videoDetails={eachVideo}
                  />
                ))}
              </TrendingVideosListContainer>
            </TrendingWrapperContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  render() {
    return (
      <>
        <Header />
        <SavedContext.Consumer>
          {value => {
            const {
              isDarkMode,
              changeCategory,
              activeCategoryId,
              categoriesList,
              showSideBar,
            } = value

            return (
              <ResultsWrapperContainer>
                <FilterGroupContainer showSideBar={showSideBar}>
                  <FilterGroup
                    changeCategory={changeCategory}
                    categoriesList={categoriesList}
                    activeCategoryId={activeCategoryId}
                    isDarkMode={isDarkMode}
                  />
                </FilterGroupContainer>
                <TrendingVideosContainer
                  data-testid="trending"
                  isDarkMode={isDarkMode}
                >
                  {this.renderFinalResultsView()}
                </TrendingVideosContainer>
              </ResultsWrapperContainer>
            )
          }}
        </SavedContext.Consumer>
      </>
    )
  }
}

export default Trending
