import axios from "axios"

class CepService {
    GetInfos(cep) {
        return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    }
}

export default new CepService()