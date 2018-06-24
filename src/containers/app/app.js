import React, { Component } from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import * as Endpoints from './../../constants/endpoints';

import Notfound from '../../components/not-found/not-found';
import MetadadoClasse from '../metadado-classe/metadado-classe';
import MetadadoProcesso from '../metadado-processo/metadado-processo';

const styles = theme => ({
  appRoot: {
    ...theme.appRoot,
    marginTop: 0
    //{/*marginTop: AppUtils.isInIframe() ? 0 : 64*/}
  }
});

class App extends Component {
  render() {
    
    const { classes } = this.props;

    return (
      <div>        
        <div className={classes.appRoot}>
          <Router>
            <Switch>
              <Route
                exact={true}
                path={
                  Endpoints.METADADO_CLASSE_CONTEXT
                }
                component={MetadadoClasse}
              />
              <Route
                exact={true}
                path={
                  Endpoints.METADADO_PROCESSO_CONTEXT
                }
                component={MetadadoProcesso}
              />              
              <Route component={Notfound} />
            </Switch>  
          </Router>

        </div>

      </div>
    );
  }
}

export default withStyles(styles)(App);