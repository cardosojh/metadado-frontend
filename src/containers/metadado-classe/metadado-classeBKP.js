import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import Metadado from '../../components/metadado/metadado';

export default class MetadadoClasse extends Component {
    render() {
      return (
        <center>
            <Typography gutterBottom>Página Metadado Classe.</Typography>
            <Metadado />
        </center>
      );
    }
};