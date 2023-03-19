import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  /* margin-top: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #eee9da;
  background-color: #93bfcf;
  font-size: calc(0.3rem + 2vmin);
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.9);
  a {
    text-decoration: none;
    color: #eee9da;
  }
  a:hover {
    text-decoration: underline;
    color: #eee9da;
  }
  i {
    transition: transform 0.3s ease-in-out;
  }
  i:hover {
    transform: rotate(360deg) scale(1.2);
  }
`;

function Footer() {
  return (
    <Wrapper>
      <p>
        Created by DiKeySnakes for
        <a
          href='https://www.theodinproject.com'
          target='_blank'
          rel='noopener noreferrer'>
          {' '}
          The Odin Project
        </a>{' '}
        curriculum
      </p>
      <p>
        Copyright © DiKeySnakes 2023
        <a
          href='https://github.com/DiKeySnakes/cv-application-project'
          target='_blank'
          rel='noopener noreferrer'>
          {' '}
          <i className='fa-brands fa-github'></i>
        </a>
      </p>
    </Wrapper>
  );
}

export default Footer;
