import {  
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { MainNav } from '../styled/MainNav'
import { PAGES } from '../constants/constants'

import { DataContext } from "../App";
import { useContext } from "react";

export const Navigation = () => {
  const data = useContext(DataContext);

  return <Router>
    <MainNav>
      {PAGES.map(page => <Link key={page.dest} to={page.dest}>{page.name}</Link>)}
    </MainNav>

    <Switch>
      {PAGES.map(page => <Route key={page.dest} exact path={page.dest}> {page.comp} </Route>)}
    </Switch>
  </Router>
}
