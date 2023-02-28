import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import 'uimini';

const Description = ({
  isPrimary,
  isSecondary,
  className,
  children,
  ...attrs
}) => {
  const classes = classNames('ui-text', className, {
    isPrimary,
    isSecondary,
  });

  return (
    <p
      className={classes}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      {...attrs}>
      {children}
    </p>
  );
};

Description.propTypes = {
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
};

Description.defaultProps = {
  isPrimary: false,
  isSecondary: false,
  className: '',
};

export default Description;
