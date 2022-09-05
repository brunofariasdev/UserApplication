import axios from "axios";

const BASE_URL = "https://localhost:7017/api/Users";


class EmployeeService {
    Login(model) {
        return axios.post(BASE_URL + "/authenticate", { email: model.email, password: model.password });
    }

    GetAllUsers() {
        return axios.get(BASE_URL);
    }

    DeleteUser(id) {
        return axios.delete(BASE_URL + "/" + id);
    }

    CreateUser(user) {
        return axios.post(BASE_URL, user);
    }
}

export default new EmployeeService();