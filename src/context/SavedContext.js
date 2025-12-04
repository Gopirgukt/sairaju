import React from 'react'

const SavedContext = React.createContext({
  savedList: [],
  addSavedItem: () => {},
  isDarkMode: false,
  onToggleMode: () => {},
  categoriesList: [],
  activeCategoryId: null,
  showSideBar: false,
  onShowSideBar: () => {},
})

export default SavedContext
