import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({ text }) => (
    <span style={{color: "#ae5886" }}>{text}</span>
);

InlineError.proTypes = {
    text: PropTypes.string.isRequired
};

export default InlineError;
