import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import {FiX} from 'react-icons/fi'

import SavedContext from '../../context/SavedContext'
import FilterGroup from '../FilterGroup'
import Header from '../Header'
import VideosCard from '../VideosCard'

import {
  HomeConatainer,
  HomeInnerConatainer,
  BannerConatiner,
  ImageElement,
  BannerDescription,
  BannerButton,
  HomeVideosContainer,
  SearchElement,
  SearchContainer,
  FailureViewContainer,
  FailureImageElement,
  FailureViewHeader,
  FailureViewMessage,
  RetryButton,
  SearchButton,
  BannerCloseButton,
  BannerInnerContainer,
  LoaderContainer,
  ResultsWrapperContainer,
  NoresultsImageElement,
  NoresultsViewHeader,
  NoresultsViewMessage,
  RenderLoader,
  FilterGroupContainer,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  apiSuccessView: 'SUCCESS',
  apiFaliureView: 'FAILURE',
  apiLoadingView: 'LOADING',
  apiNoResultsView: 'NO RESULTS',
}

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  handleCloseButton = () => this.setState({showBanner: false})

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
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      if (data.videos.length === 0) {
        this.setState({apiStatus: apiStatusConstants.apiNoResultsView})
        return
      }
      const updatedData = data.videos.map(eachData =>
        this.formattedData(eachData),
      )
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.apiSuccessView,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.apiFaliureView})
    }
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  enterSearchInput = () => this.getVideos()

  renderVideosListView = () => {
    const {videosList} = this.state

    return (
      <HomeVideosContainer>
        {videosList.map(eachVideo => (
          <VideosCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </HomeVideosContainer>
    )
  }

  renderVideosList = () => {
    const {searchInput, showBanner} = this.state

    return (
      <SavedContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <HomeInnerConatainer>
              {showBanner && (
                <BannerConatiner data-testid="banner">
                  <BannerInnerContainer>
                    <ImageElement
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerDescription>
                      Buy NXT Watch premium prepaid plans with UPI
                    </BannerDescription>
                    <BannerButton>GET IT NOW</BannerButton>
                  </BannerInnerContainer>
                  <BannerCloseButton
                    type="button"
                    data-testid="close"
                    onClick={this.handleCloseButton}
                  >
                    <FiX />
                  </BannerCloseButton>
                </BannerConatiner>
              )}
              <SearchContainer isDarkMode={isDarkMode}>
                <SearchElement
                  type="search"
                  placeholder="Search"
                  onChange={this.changeSearchInput}
                  value={searchInput}
                  isDarkMode={isDarkMode}
                />
                <SearchButton
                  data-testid="searchButton"
                  type="button"
                  isDarkMode={isDarkMode}
                >
                  <BsSearch onClick={this.enterSearchInput} />
                </SearchButton>
              </SearchContainer>
              {this.renderFinalResultsView()}
            </HomeInnerConatainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  renderNoResultsFoundView = () => (
    <SavedContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const {showBanner} = this.state
        return (
          <FailureViewContainer showBanner={showBanner}>
            <NoresultsImageElement
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoresultsViewHeader isDarkMode={isDarkMode}>
              No Search results found
            </NoresultsViewHeader>
            <NoresultsViewMessage isDarkMode={isDarkMode}>
              Try different key words or remove search filter
            </NoresultsViewMessage>
            <RetryButton onClick={this.getVideos}>Retry</RetryButton>
          </FailureViewContainer>
        )
      }}
    </SavedContext.Consumer>
  )

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
      case apiStatusConstants.apiNoResultsView:
        return this.renderNoResultsFoundView()
      case apiStatusConstants.apiSuccessView:
        return this.renderVideosListView()
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
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure view"
              />
            ) : (
              <FailureImageElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
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

  render() {
    return (
      <SavedContext.Consumer>
        {value => {
          const {
            isDarkMode,
            categoriesList,
            changeCategory,
            showSideBar,
            activeCategoryId,
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
                <HomeConatainer data-testid="home" isDarkMode={isDarkMode}>
                  {this.renderVideosList()}
                </HomeConatainer>
              </ResultsWrapperContainer>
            </>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Home
