import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Wrapper, Content } from './assets/style/theme';

const App: FC = () => {
  return (
    <Wrapper>
      <Content>
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </Content>
    </Wrapper>
  );
};
export default App;
