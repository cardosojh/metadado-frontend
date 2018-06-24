import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import pt from 'react-intl/locale-data/pt';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import * as Theme from './constants/theme';
import App from './containers/app/app';
import newStore from './store';

const theme = createMuiTheme(Theme.MUI_THEME);

addLocaleData([...pt]);

ReactDOM.render(
  
  <MuiThemeProvider theme={theme}>
    <IntlProvider locale="pt-BR">
     <Provider store={newStore}> 
        <App />
      </Provider> 
    </IntlProvider> 
  </MuiThemeProvider>

  , document.getElementById('root'));