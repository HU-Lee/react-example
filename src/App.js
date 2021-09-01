import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConstPage from './components/pages/ConstPage';
import CssExPage from './components/pages/CssExPage';
import DelayPage from './components/pages/DelayPage';
import IntlPage from './components/pages/IntlPage';
import MainPage from './components/pages/MainPage';

function App() {

  const [Lang, setLang] = useState("en")
  const message = require(`../lang/${Lang}.json`)

  return (
    <IntlProvider formats={Lang} messages={message}>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/css" component={CssExPage}/>
          <Route exact path="/const" component={ConstPage}/>
          <Route exact path="/delay" component={DelayPage}/>
          <Route exact path="/intl" component={() => <IntlPage changeFunc={setLang}/>}/>
        </Switch>
      </Router>
    </IntlProvider>
  );
}

export default App;
