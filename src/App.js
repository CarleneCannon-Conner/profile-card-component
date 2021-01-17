import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
function App() {
  const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Kumbh Sans', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
    }
  `

  const defaultTheme = {
    backgroundColor: 'hsl(185, 75%, 39%)',
    headerColor: 'hsl(229, 23%, 23%)',
    fontColor: 'hsl(227, 10%, 46%)',
    borderColor: 'hsl(0, 0%, 59%)',
    paddingMedium: 1.5625, // apx 25px
    bpSmall: 23.4375, // apx 375px
    borderRadius: 0.9375, // apx 15px

  }

  const Background = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    height: 100vh;
    padding: ${props => `${props.theme.paddingMedium}rem`};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const BackgroundPattern = styled.div`
    position: absolute;
    height: 60%;
    width: 60%;
    background-repeat: no-repeat;
    @media (min-width: ${props => `${props.theme.bpSmall}rem`}) {
      height: 50%;
      width: 50%;
    }
  `;

  const BackgroundPatternTop = styled(BackgroundPattern)`
    top: 0;
    left: 0;
    background-image: url('images/bg-pattern-top.svg');
    background-position: right bottom;
  `;

  const BackgroundPatternBottom = styled(BackgroundPattern)`
    bottom: 0;
    right: 0;
    background-image: url('images/bg-pattern-bottom.svg');
    background-position: left top;
  `;

  const Card = styled.div`
    z-index: 1;
    background-color: white;
    box-shadow: 0px 0px 60px 60px rgba(0, 0, 0, 0.1);
    max-width: 22.1875rem;
    width: 100%;
    border-radius: ${props => `${props.theme.borderRadius}rem`};
    overflow: hidden;
    position: relative;
    color: ${props => props.theme.fontColor};
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 400;
    font-size: 1.125em;
  `;

  const CardBubbles = styled.div`
    height: 8.75rem;
    background-image: url('images/bg-pattern-card.svg');
  `;

  const Avatar = styled.div`
    width: 6.5625rem;
    height: 6.5625rem;
    background-image: url('images/image-victor.jpg');
    border-radius: 50%;
    border: 5px solid white;
    position: absolute;
    top: 5.4375rem;
    left: calc(50% - 3.28125rem);
  `;

  const Header = styled.span`
    display: inline-block;
    font-weight: 700;
    color: ${props => props.theme.headerColor};
    padding-bottom: 0.625em;
  `;

  const PersonalDetails = styled.div`
    padding-top: 4.53125rem;
    padding-bottom: 1.5625em;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    text-align: center;
  `;

  const Stats = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: ${props => `${props.theme.paddingMedium}em ${props.theme.paddingMedium}rem`};
  `;

  const Footer = styled.div`
    padding: ${props => `${props.theme.paddingMedium}em ${props.theme.paddingMedium}rem`};
    line-height: 1.5;
    text-align: center;
  `;


  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Background>
        <BackgroundPatternTop />
        <Card>
          <CardBubbles />
          <Avatar />
          <PersonalDetails>
            <div>
              <Header>Victor Crest</Header> 26
            </div>
            London
          </PersonalDetails>
          <Stats>
            <div>
              <div>
                <Header>80K</Header>
              </div>
              <div>
                Followers
              </div>
            </div>
            <div>
              <div>
                <Header>803K</Header>
              </div>
              <div>
                Likes
              </div>
            </div>
            <div>
              <div>
                <Header>1.4K</Header>
              </div>
              <div>
                Photos
              </div>
            </div>
          </Stats>
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
    </ThemeProvider>
  );
}

export default App;
