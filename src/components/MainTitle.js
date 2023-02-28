import React from 'react';
import propTypes from 'prop-types';
import 'uimini';

import '../styles/MainTitle.css';

// icons:
import { ReactComponent as PrintIcon } from '../assets/icons/printer.svg';

const MainTitle = ({ onClick }) => {
  return (
    <header className='MainTitle'>
      <div className='ui-container'>
        <div className='MainTitle_content'>
          <span className='MainTitle_logo'>Cv builder</span>
          <button className='ui-button isLink' onClick={onClick}>
            <PrintIcon style={{ width: '1rem', marginRight: '0.6rem' }} />
            Print
          </button>
        </div>
      </div>
    </header>
  );
};

MainTitle.propTypes = {
  onClick: propTypes.func,
};

MainTitle.defaultProps = {
  onClick: () => {},
};

export default MainTitle;
