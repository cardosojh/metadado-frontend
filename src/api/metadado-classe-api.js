import axios from 'axios';
import * as Endpoints from '../constants/endpoints';

export default class MetadadoClasseApi {

    static consultaMetadados(classeId) {
      let url =  Endpoints.ROOT_METADADO_BACKEND_CONTEXT + "/metadado";
      return axios.get(url
        ).then((response) => {
            return response.data;
        });
    }

    static salvarMetadados(classeId, metadados) {
      let url =  Endpoints.ROOT_METADADO_BACKEND_CONTEXT + "/" + classeId;
      return axios.post(url, metadados
      ).then((response) => {
          return response.data;
      });
    }

}