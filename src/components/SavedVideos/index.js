import {Component} from 'react'
import {FaFire} from 'react-icons/fa'
import {
  SavedVideosContainer,
  SavedVideosHeader,
  SavedVideosListContainer,
  NoSavedContainer,
  NoSavedImageElement,
  NoSavedHeader,
  NoSavedMessage,
  SavedVideosWrapperContainer,
  ResultsWrapperContainer,
  FilterGroupContainer,
} from './StyledComponents'
import SavedContext from '../../context/SavedContext'
import SavedVideosCard from '../SavedVideosCard'
import FilterGroup from '../FilterGroup'
import Header from '../Header'

class SavedVideos extends Component {
  renderFailureView = () => (
    <SavedContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <NoSavedContainer>
            <NoSavedImageElement
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedHeader isDarkMode={isDarkMode}>
              No saved videos found
            </NoSavedHeader>
            <NoSavedMessage isDarkMode={isDarkMode}>
              You can save your videos while watching them
            </NoSavedMessage>
          </NoSavedContainer>
        )
      }}
    </SavedContext.Consumer>
  )

  render() {
    return (
      <SavedContext.Consumer>
        {value => {
          const {
            savedList,
            isDarkMode,
            activeCategoryId,
            categoriesList,
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
                <SavedVideosContainer
                  data-testid="savedVideos"
                  isDarkMode={isDarkMode}
                >
                  <SavedVideosWrapperContainer>
                    <SavedVideosHeader isDarkMode={isDarkMode}>
                      <FaFire style={{marginRight: '8px', color: '#ff0000'}} />
                      Saved Videos
                    </SavedVideosHeader>
                    <SavedVideosListContainer>
                      {savedList.length > 0
                        ? savedList.map(eachVideo => (
                            <SavedVideosCard
                              key={eachVideo.id}
                              videoDetails={eachVideo}
                            />
                          ))
                        : this.renderFailureView()}
                    </SavedVideosListContainer>
                  </SavedVideosWrapperContainer>
                </SavedVideosContainer>
              </ResultsWrapperContainer>
            </>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default SavedVideos
