import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  padding: 20px;
  width: 100%;
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
export const SavedVideosHeader = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#323f4b')};
  font-family: Roboto;
  font-size: 20px;
  margin-bottom: 20px;
`

export const SavedVideosListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`
export const NoSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 90vh;
`
export const NoSavedImageElement = styled.img`
  height: 270px;
  width: 300px;
  @media (max-width: 767px) {
    height: 190px;
    width: 220px;
  }
`
export const NoSavedHeader = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#323f4b')};
  @media (max-width: 767px) {
    font-size: 16px;
  }
`
export const NoSavedMessage = styled.p`
  font-size: 16px;
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
  @media (max-width: 767px) {
    font-size: 12px;
  }
`
export const SavedVideosWrapperContainer = styled.div``

export const ResultsWrapperContainer = styled.div`
  display: flex;
`
