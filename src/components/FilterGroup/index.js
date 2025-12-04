import {
  CategoriesContainer,
  CategoryItem,
  BottomSection,
  SideBarContainer,
  ContactUsHeading,
  ImageLogo,
  GreetingMsg,
  ImageLogoContainer,
  NavigateLink,
} from './StyledComponents'

const FilterGroup = props => {
  const renderCategoriesList = () => {
    const {categoriesList, changeCategory, activeCategoryId, isDarkMode} = props

    return categoriesList.map(category => {
      const onChangeCategory = () => changeCategory(category.id)

      const CategoryLogo = category.categoryLogo
      let linkedRoute = ''

      switch (category.name.toLowerCase()) {
        case 'home':
          linkedRoute = '/'
          break
        case 'trending':
          linkedRoute = '/trending'
          break
        case 'gaming':
          linkedRoute = '/gaming'
          break
        case 'saved videos':
          linkedRoute = '/saved-videos'
          break
        default:
          linkedRoute = '/'
      }

      return (
        <NavigateLink
          to={linkedRoute}
          key={category.id}
          onClick={onChangeCategory}
        >
          <CategoryItem
            isActive={activeCategoryId === category.id}
            isDarkMode={isDarkMode}
          >
            <CategoryLogo
              style={{
                color: activeCategoryId === category.id ? 'reed' : 'inherit',
              }}
            />
            {category.name}
          </CategoryItem>
        </NavigateLink>
      )
    })
  }

  const renderSideBarView = () => {
    const {isDarkMode} = props
    return (
      <SideBarContainer isDarkMode={isDarkMode}>
        <CategoriesContainer>{renderCategoriesList()}</CategoriesContainer>
        <BottomSection>
          <ContactUsHeading isDarkMode={isDarkMode}>
            CONTACT US
          </ContactUsHeading>
          <ImageLogoContainer>
            <ImageLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <ImageLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <ImageLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt=" linked in logo"
            />
          </ImageLogoContainer>
          <GreetingMsg isDarkMode={isDarkMode}>
            Enjoy! Now to see your
            <br /> channels and <br />
            recommendations!
          </GreetingMsg>
        </BottomSection>
      </SideBarContainer>
    )
  }

  return <>{renderSideBarView()}</>
}

export default FilterGroup
