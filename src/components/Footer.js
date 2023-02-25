function Footer() {
  return (
    <div id='footer'>
      <footer>
        <p>
          Created by DiKeySnakes for
          <a
            href='https://theodinproject.com/'
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
            <i id='githubIcon' className='fa-brands fa-github'></i>
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
