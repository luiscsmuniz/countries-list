import styled from 'styled-components'
import '../../styles/animation.css'

const StyledDiv = styled.div`
position: fixed;
display: block;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.3);
z-index: 999;
cursor: pointer;
text-align: center;
`

export const Overlay = ({ isVisible }) => {
  if (isVisible) {
    return (
      <StyledDiv>
        <div className="loading">
          <p className="loading-letters">C</p>
          <p className="loading-letters">A</p>
          <p className="loading-letters">R</p>
          <p className="loading-letters">R</p>
          <p className="loading-letters">E</p>
          <p className="loading-letters">G</p>
          <p className="loading-letters">A</p>
          <p className="loading-letters">N</p>
          <p className="loading-letters">D</p>
          <p className="loading-letters">O</p>
          <p className="loading-letters">.</p>
          <p className="loading-letters">.</p>
          <p className="loading-letters">.</p>
        </div>
      </StyledDiv>
    )
  }

  return null
}
