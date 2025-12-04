import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  width: 100%;
  text-align: center;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  @media (max-width: 767px) {
    width: 100%;
    padding: 30px;
  }
`
export const ImageElement = styled.img`
  height: 270px;
  width: 300px;
`
export const FilterGroupContainer = styled.div`
  @media (max-width: 767px) {
    display: ${props => (props.showSideBar ? 'block' : 'none')};
  }
  @media (min-width: 768px) {
    display: block;
  }
`

export const NotFoundHeader = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#323f4b')};
  @media (max-width: 767px) {
    font-size: 16px;
  }
`
export const NotFoundMessage = styled.p`
  font-size: 16px;
  color: ${props => (props.isDarkMode ? '#f0f0f0' : '#323f4b')};
  @media (max-width: 767px) {
    font-size: 14px;
  }
`
export const ResultsWrapperContainer = styled.div`
  display: flex;
`
