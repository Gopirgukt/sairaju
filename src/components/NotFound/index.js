import {
  NotFoundContainer,
  ImageElement,
  NotFoundHeader,
  NotFoundMessage,
  ResultsWrapperContainer,
  FilterGroupContainer,
} from './StyledComponents'
import SavedContext from '../../context/SavedContext'
import Header from '../Header'
import FilterGroup from '../FilterGroup'

const NotFound = () => (
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
            <NotFoundContainer isDarkMode={isDarkMode}>
              {isDarkMode ? (
                <ImageElement
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                  alt="not found"
                />
              ) : (
                <ImageElement
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  alt="not found"
                />
              )}
              <NotFoundHeader isDarkMode={isDarkMode}>
                Page Not Found
              </NotFoundHeader>
              <NotFoundMessage isDarkMode={isDarkMode}>
                we are sorry, the page you requested could not be found.
              </NotFoundMessage>
            </NotFoundContainer>
          </ResultsWrapperContainer>
        </>
      )
    }}
  </SavedContext.Consumer>
)

export default NotFound
