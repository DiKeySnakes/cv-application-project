import styled from 'styled-components';
import Logo from '../assets/images/cv_logo_square_white_blue_shadow.png';

const Wrapper = styled.div`
  width: 100vw;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #bdcdd6;
  position: fixed;
  border-bottom: 2px solid black;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  top: 0;
  left: 50%;
  margin-left: -50vw;
  z-index: 10;
  font-size: calc(1.5rem + 2vmin);
  @media (max-width: 650px) {
    font-size: calc(1rem + 2vmin);
  }
  @media (max-width: 430px) {
    font-size: calc(0.5rem + 2vmin);
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #eee9da;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.9);
  margin-left: 3rem;
`;

const Title = styled.div`
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  white-space: nowrap;
  font-size: calc(1rem + 2vmin);
  margin-left: 0.5rem;
`;

const LogoWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 3rem;
  font-size: calc(0.5rem + 2vmin);
  background-color: rgba(189, 205, 214, 1);
  border: none;
  cursor: pointer;
  color: #eee9da;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.9);
  @media (max-width: 650px) {
    font-size: calc(1rem + 2vmin);
  }
  @media (max-width: 430px) {
    font-size: calc(0.5rem + 2vmin);
  }
`;

function Header(props) {
  return (
    <Wrapper>
      <TitleWrapper>
        <LogoWrapper>
          <img src={Logo} alt='Logo'></img>
        </LogoWrapper>
        <Title>CV Builder</Title>
      </TitleWrapper>
      <Button onClick={props.onClick}>
        <i className='fa-solid fa-print'></i> Print
      </Button>
    </Wrapper>
  );
}

export default Header;
