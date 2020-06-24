import React, { Fragment } from 'react';
import Comps from './Comps';
import PropTypes from 'prop-types';
import QueryString from 'query-string';

const Home = ({ location: {search} }) => {
   const query  = QueryString.parse(search);
   return (
      <Fragment>
         <Comps district={query.district} year={query.year}/>
      </Fragment>
   );
}

Home.propTypes = {
   location: PropTypes.object // URL details
}

export default Home;