import axios from 'axios';
import * as Endpoints from '../constants/endpoints';

export default class MetadadoProcessoApi {

    static consultaMetadados(processoId) {
      let url =  Endpoints.ROOT_METADADO_BACKEND_CONTEXT + "/metadado-processo/" + processoId;
      return axios.get(url
        ).then((response) => {
            return response.data;
        });
    }

    static salvarMetadados(processoId, metadados) {
      let url =  Endpoints.ROOT_METADADO_BACKEND_CONTEXT + "/metadado-processo/" + processoId;
      return axios.post(url, metadados
      ).then((response) => {
          return response.data;
      });
    }

}