import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import 'uimini';

const Wrapper = styled.div`
  /* margin-bottom: 1rem; */
  button {
    display: inline-block;
    transition: 0.1s all ease;
    opacity: 0 !important;
  }
  &:hover button {
    opacity: 1 !important;
  }
  p {
    display: inline-block;
    margin-bottom: 0;
  }
`;

const Description = ({
  isPrimary,
  isSecondary,
  isShowButton,
  className,
  onClick,
  children,
  ...attrs
}) => {
  const classes = classNames('ui-text', className, {
    isPrimary,
    isSecondary,
  });

  return (
    <Wrapper>
      <p
        className={classes}
        contentEditable
        suppressContentEditableWarning
        spellCheck={false}
        {...attrs}>
        {children}
      </p>
      {isShowButton && (
        <button className='ui-button isLink' onClick={onClick}>
          {' '}
          Remove{' '}
        </button>
      )}
    </Wrapper>
  );
};

Description.propTypes = {
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  isShowButton: propTypes.bool,
  className: propTypes.string,
  onClick: propTypes.func,
  children: propTypes.node.isRequired,
};

Description.defaultProps = {
  isPrimary: false,
  isSecondary: false,
  isShowButton: false,
  className: '',
  onClick: () => {},
};

export default Description;
