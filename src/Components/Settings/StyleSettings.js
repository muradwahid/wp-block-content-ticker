import React, { Fragment } from 'react';
import BadgeStyle from './BadgeStyle';
import ContentStyle from './ContentStyle';

const StyleSettings = ({ attributes, setAttributes }) => {
  return (
    <Fragment>
      <BadgeStyle attributes={attributes} setAttributes={setAttributes} />
      <ContentStyle attributes={attributes} setAttributes={setAttributes} />
    </Fragment>
  );
};

export default StyleSettings;
