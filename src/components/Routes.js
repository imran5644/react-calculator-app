import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import App from './App';
import Quote from './Quote';

const Routes = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={App} />
      <Route path="/quote" component={Quote} />
    </Switch>
    <footer>
      <span>
        Photo by&nbsp;
        <a className="footer-link" href="https://unsplash.com/@chrisliverani?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Chris Liverani
        </a>
        &nbsp;on&nbsp;
        <a className="footer-link" href="https://unsplash.com/s/photos/maths?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </footer>
  </Router>
);

export default Routes;
