import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(({
      title, content, twitterName, created, id,
    }) => (
      <Card
        id={id}
        cardType="twitters"
        title={title}
        content={content}
        twitterName={twitterName}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = (state) => {
  const { twitters } = state;
  return { twitters };
};

export default connect(mapStateToProps)(Twitters);
