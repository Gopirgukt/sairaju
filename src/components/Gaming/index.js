import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import SavedContext from '../../context/SavedContext'
import GamingVideoCard from '../GamingVideoCard'
import FilterGroup from '../FilterGroup'
import Header from '../Header'

import {
  GamingHeader,
  GamingVideosContainer,
  GamingVideosListContainer,
  FailureViewContainer,
  FailureImageElement,
  FailureViewHeader,
  FailureViewMessage,
  RetryButton,
  LoaderContainer,
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

class Gaming extends Component {
  state = {
    gamingList: [],
    apiStatus: apiStatusConstants.intial,
  }

  componentDidMount = () => {
    this.getVideos()
  }

  formattedData = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.apiLoadingView})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
        gamingList: updatedData,
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
        return this.renderGamingResultsView()
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
            <Link to="/gaming">
              <RetryButton onClick={this.getVideos}>Retry</RetryButton>
            </Link>
          </FailureViewContainer>
        )
      }}
    </SavedContext.Consumer>
  )

  renderGamingResultsView = () => {
    const {gamingList} = this.state

    return (
      <SavedContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <div>
              <GamingHeader isDarkMode={isDarkMode}>
                <SiYoutubegaming
                  style={{marginRight: '8px', color: '#ff0000'}}
                />
                Gaming
              </GamingHeader>
              <GamingVideosListContainer>
                {gamingList.map(eachVideo => (
                  <GamingVideoCard
                    key={eachVideo.id}
                    videoDetails={eachVideo}
                  />
                ))}
              </GamingVideosListContainer>
            </div>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  render() {
    return (
      <SavedContext.Consumer>
        {value => {
          const {
            isDarkMode,
            categoriesList,
            activeCategoryId,
            changeCategory,
            showSideBar,
          } = value
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
                <GamingVideosContainer
                  data-testid="gaming"
                  isDarkMode={isDarkMode}
                >
                  {this.renderFinalResultsView()}
                </GamingVideosContainer>
              </ResultsWrapperContainer>
            </>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Gaming
