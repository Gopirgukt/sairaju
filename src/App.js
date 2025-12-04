import {Switch, Route} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import SavedContext from './context/SavedContext'
import NotFound from './components/NotFound'
import './App.css'

const initialCategoriesList = [
  {
    name: 'Home',
    id: 1,
    categoryLogo: AiFillHome,
  },
  {
    name: 'Trending',
    id: 2,
    categoryLogo: FaFire,
  },
  {
    name: 'Gaming',
    id: 3,
    categoryLogo: SiYoutubegaming,
  },
  {
    name: 'Saved Videos',
    id: 4,
    categoryLogo: MdPlaylistAdd,
  },
]

class App extends Component {
  state = {
    savedList: [],
    isDarkMode: false,
    categoriesList: initialCategoriesList,
    activeCategoryId: initialCategoriesList[0].id,
    showSideBar: false,
  }

  addSavedVideos = video => {
    this.setState(prev => ({
      savedList: prev.savedList.some(savedVideo => savedVideo.id === video.id)
        ? prev.savedList
        : [...prev.savedList, video],
    }))
  }

  changeCategory = activeCategoryId => this.setState({activeCategoryId})

  onToggleMode = () =>
    this.setState(prev => ({
      isDarkMode: !prev.isDarkMode,
    }))

  onShowSideBar = () =>
    this.setState(prev => ({
      showSideBar: !prev.showSideBar,
    }))

  render() {
    const {
      savedList,
      isDarkMode,
      categoriesList,
      activeCategoryId,
      showSideBar,
    } = this.state

    return (
      <SavedContext.Provider
        value={{
          savedList,
          isDarkMode,
          addSavedVideos: this.addSavedVideos,
          onToggleMode: this.onToggleMode,
          categoriesList,
          activeCategoryId,
          changeCategory: this.changeCategory,
          showSideBar,
          onShowSideBar: this.onShowSideBar,
        }}
      >
        <>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Route component={NotFound} />
          </Switch>
        </>
      </SavedContext.Provider>
    )
  }
}

export default App
