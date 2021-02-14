import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import { MdHome, MdSettings, MdAdd } from "react-icons/md";

import Home from './Home';
import New from './New';
import Config from './Config';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <aside className="sidebar">
          <NavLink to="/" className="sidebar-item" activeClassName="active" exact={true}>
            <MdHome />
          </NavLink>
          <NavLink to="/new" className="sidebar-item" activeClassName="active">
            <MdAdd />
          </NavLink>
          <NavLink to="/configs" className="sidebar-item settings" activeClassName="active">
            <MdSettings />
          </NavLink>
        </aside>
        <main className="content">
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/new" component={New} />
                <Route path="/configs" component={Config} />
            </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
