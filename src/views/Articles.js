import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';


const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map(({
      title, content, articleUrl, created, id,
    }) => (
      <Card
        id={id}
        cardType="articles"
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles };
};

export default connect(mapStateToProps)(Articles);
