import axios from 'axios';
import * as Endpoints from '../constants/endpoints';

export default class TipoMetadadoApi {

    static consultaTiposMetadado() {
      let url =  Endpoints.ROOT_METADADO_BACKEND_CONTEXT + "/tipo-metadado";
      return axios.get(url
        ).then((response) => {
            return response.data;
        });
    }
}