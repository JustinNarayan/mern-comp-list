import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

const Routing = () => {
   return (
      <main>
         <Switch>
            <Route exact path="/" component={Home} />
         </Switch>
      </main>
   );
}

export default Routing;