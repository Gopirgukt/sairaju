import styled from 'styled-components'
import Loader from 'react-loader-spinner'

export const RenderLoader = styled(Loader)`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`
export const HomeConatainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const FilterGroupContainer = styled.div`
  @media (max-width: 767px) {
    display: ${props => (props.showSideBar ? 'block' : 'none')};
  }
  @media (min-width: 768px) {
    display: block;
  }
`

export const HomeInnerConatainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const BannerConatiner = styled.div`
  height: 25vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 20px;
    padding: 20px;
  }
`

export const BannerInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 0;
`

export const BannerCloseButton = styled.button`
  border: none;
  ouline: none;
  background-color: transparent;
  align-self: flex-start;
`

export const ImageElement = styled.img`
  height: 30px;
  width: 110px;
  align-self: center;
  margin-bottom: 10px;
  align-self: flex-start;
  @media (max-width: 767px) {
    height: 27px;
    width: 90px;
  }
`
export const BannerButton = styled.button`
  color: 4f46e5;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  background-color: transparent;
  font-size: 12px;
  border: 1px solid 4f46e5;
  @media (max-width: 767px) {
    height: 27px;
    width: 90px;
    font-size: 10px;
  }
`

export const SearchButton = styled.button`
  border: none;
  ouline: none;
  background-color: transparent;
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
`

export const BannerDescription = styled.p`
  font-size: 15px;
  color: #323f4b;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const HomeVideosContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
`
export const SearchContainer = styled.div`
  height: 26px;
  width: 300px;
  border: ${props =>
    props.isDarkMode ? '1px solid #f0f0f0' : '1px solid #323f4b'};
  display: flex;
  align-items: center;
  padding-right: 11px;
  padding-left: 9px;
  padding-top: 3px;
  margin-bottom: 20px;
  border-radius: 3px;
  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 20px;
  }
`
export const SearchElement = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  flex-grow: 1;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#323f4b')};
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: ${props => (props.showBanner ? '50vh' : '88vh')};
  @media (max-width: 767px) {
    min-height: ${props => (props.showBanner ? '30vh' : '88vh')};
  }
`
export const FailureImageElement = styled.img`
  height: 200px;
  width: 230px;
  @media (max-width: 767px) {
    height: 180px;
    width: 200px;
  }
`
export const FailureViewHeader = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#323f4b')};
  @media (max-width: 767px) {
    font-size: 16px;
  }
`
export const FailureViewMessage = styled.p`
  font-size: 16px;
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
  @media (max-width: 767px) {
    font-size: 12px;
  }
`
export const RetryButton = styled.button`
  color: #ffffff;
  font-size: 12px;
  height: 30px;
  width: 99px;
  background-color: #4f46e5;
  border-radius: 5px;
  border: none;
  @media (max-width: 767px) {
    font-size: 10px;
    height: 25px;
    width: 90px;
  }
`

export const NoresultsImageElement = styled.img`
  height: 200px;
  width: 240px;
  @media (max-width: 767px) {
    height: 180px;
    width: 220px;
  }
`
export const NoresultsViewHeader = styled.h1`
  font-size: 19px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#323f4b')};
  @media (max-width: 767px) {
    font-size: 16px;
  }
`
export const NoresultsViewMessage = styled.p`
  font-size: 16px;
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
  @media (max-width: 767px) {
    font-size: 12px;
  }
`

export const LoaderContainer = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ResultsWrapperContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 90vh;
`
