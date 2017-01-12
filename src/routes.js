import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Main from 'containers/Main';
import NoMatch from 'components/NoMatch';

const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="*" component={NoMatch}/>
    </Route>
  </div>
);

export default routes;
