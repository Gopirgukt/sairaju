import {Link, withRouter} from 'react-router-dom'
import {BsSun, BsMoon} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import SavedContext from '../../context/SavedContext'

import {
  NavContent,
  ImageElement,
  NavMenu,
  NavItem,
  LogoutButton,
  NavButton,
  NavButtonImage,
  CustomButton,
  AlertHeader,
  PopUpCards,
  NavHeaderMd,
  NavHeaderSm,
  HamburgerIcon,
} from './StyledComponents'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <SavedContext.Consumer>
      {value => {
        const {onToggleMode, isDarkMode, onShowSideBar} = value
        return (
          <>
            <NavHeaderMd isDarkMode={isDarkMode}>
              <NavContent>
                <Link to="/">
                  {isDarkMode ? (
                    <ImageElement
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="website logo"
                    />
                  ) : (
                    <ImageElement
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                  )}
                </Link>

                <NavMenu>
                  <NavItem id="navTheme">
                    <NavButton onClick={onToggleMode} data-testid="theme">
                      {isDarkMode ? (
                        <BsSun color="#ffffff" size={24} />
                      ) : (
                        <BsMoon size={24} />
                      )}
                    </NavButton>
                  </NavItem>
                  <NavItem id="navProfile">
                    <NavButton>
                      <NavButtonImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </NavButton>
                  </NavItem>
                  <NavItem id="navLogoutBtn">
                    <Popup
                      modal
                      trigger={
                        <LogoutButton isDarkMode={isDarkMode}>
                          Logout
                        </LogoutButton>
                      }
                    >
                      {close => (
                        <PopUpCards isDarkMode={isDarkMode}>
                          <AlertHeader isDarkMode={isDarkMode}>
                            Are you sure, you want to logout?
                          </AlertHeader>
                          <CustomButton
                            type="button"
                            onClick={close}
                            isDarkMode={isDarkMode}
                          >
                            Cancel
                          </CustomButton>
                          <CustomButton
                            confirm
                            type="button"
                            onClick={onLogout}
                            isDarkMode={isDarkMode}
                          >
                            Confirm
                          </CustomButton>
                        </PopUpCards>
                      )}
                    </Popup>
                  </NavItem>
                </NavMenu>
              </NavContent>
            </NavHeaderMd>
            <NavHeaderSm isDarkMode={isDarkMode}>
              <NavContent>
                <Link to="/">
                  {isDarkMode ? (
                    <ImageElement
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="website logo"
                    />
                  ) : (
                    <ImageElement
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                  )}
                </Link>

                <NavMenu>
                  <NavItem id="navTheme">
                    <NavButton onClick={onToggleMode} data-testid="theme">
                      {isDarkMode ? (
                        <BsSun color="#ffffff" size={21} />
                      ) : (
                        <BsMoon size={21} />
                      )}
                    </NavButton>
                  </NavItem>
                  <NavButton>
                    <HamburgerIcon
                      $isDarkMode={isDarkMode}
                      onClick={onShowSideBar}
                    />
                  </NavButton>
                  <NavItem id="navProfile">
                    <NavButton>
                      <NavButtonImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </NavButton>
                  </NavItem>
                  <NavItem id="navLogoutBtn">
                    <Popup
                      modal
                      trigger={
                        <LogoutButton isDarkMode={isDarkMode}>
                          <FiLogOut size={21} />
                        </LogoutButton>
                      }
                    >
                      {close => (
                        <PopUpCards isDarkMode={isDarkMode}>
                          <AlertHeader isDarkMode={isDarkMode}>
                            Are you sure, you want to logout?
                          </AlertHeader>
                          <CustomButton
                            type="button"
                            onClick={close}
                            isDarkMode={isDarkMode}
                          >
                            Cancel
                          </CustomButton>
                          <CustomButton
                            confirm
                            type="button"
                            onClick={onLogout}
                            isDarkMode={isDarkMode}
                          >
                            Confirm
                          </CustomButton>
                        </PopUpCards>
                      )}
                    </Popup>
                  </NavItem>
                </NavMenu>
              </NavContent>
            </NavHeaderSm>
          </>
        )
      }}
    </SavedContext.Consumer>
  )
}
export default withRouter(Header)
