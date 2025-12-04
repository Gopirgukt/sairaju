import styled from 'styled-components'
import Loader from 'react-loader-spinner'

export const RenderLoader = styled(Loader)`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`
export const TrendingVideosContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  width: 100%;
  padding: 20px;
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
export const TrendingHeader = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#323f4b')};
  font-family: Roboto;
  font-size: 20px;
`

export const TrendingVideosListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 90vh;
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
  @media (max-width: 768px) {
    font-size: 10px;
    height: 25px;
    width: 90px;
  }
`

export const TrendingWrapperContainer = styled.div``

export const LoaderContainer = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ResultsWrapperContainer = styled.div`
  display: flex;
`
