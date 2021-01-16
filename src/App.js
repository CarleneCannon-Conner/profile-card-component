import styled from 'styled-components'
function App() {
  const Background = styled.div`
  background-color: hsl(185, 75%, 39%);
  height: 100vh;
  `;

const BackgroundPatternTop = styled.div`
  position: absolute;
  background-image: url('images/bg-pattern-top.svg');
  height: 60%;
  width: 60%;
  background-repeat: no-repeat;
  background-position: right bottom;
  @media (min-width: 23.4375rem) { // 375px
    height: 40%;
    width: 40%;
  }
  `;

const BackgroundPatternBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-image: url('images/bg-pattern-bottom.svg');
  height: 60%;
  width: 60%;
  background-repeat: no-repeat;
  background-position: left top;
  @media (min-width: 23.4375rem) { // 375px
    height: 40%;
    width: 40%;
  }
`;

  return (
    <>
      <Background>
        <BackgroundPatternTop />
        Background
        <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target='_blank' rel='noreferrer'>Frontend Mentor</a>. 
        Coded by Carlene Cannon-Conner.
      </div>
      <BackgroundPatternBottom />
      </Background>
    </>
  );
}

export default App;
