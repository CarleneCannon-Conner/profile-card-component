import styled from 'styled-components'
function App() {
  const Background = styled.div`
  background-color: hsl(185, 75%, 39%);
  height: 100vh;
  padding: 1.5625rem;// 25
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

const BackgroundPatternTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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

  const Card = styled.div`
    background-color: white;
    max-width: 22.1875rem; //355
    width: 100%;
  `;

  const Footer = styled.div`
    padding: 1.5625rem;// 25
    line-height: 1.5;
    text-align: center;
  `;


  return (
    <>
      <Background>
        <BackgroundPatternTop />
        <Card>
          Card
        </Card>
        <BackgroundPatternBottom />
      </Background>
      <Footer>
          <p>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target='_blank' rel='noreferrer'>Frontend Mentor</a>
          </p>
          <p>
          Coded by Carlene Cannon-Conner
          </p>
      </Footer>
    </>
  );
}

export default App;
