import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';


const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map(({
      title, content, created, id,
    }) => (
      <Card id={id} cardType="notes" title={title} content={content} created={created} key={id} />
    ))}
  </GridTemplate>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
