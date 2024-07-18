import axios from "axios";
import CreateMahasiswa from "../komponen/admin/CreateMahasiswa";
import UpdateMahasiswa from "../komponen/admin/UpdateMahasiswa";
import { data } from "autoprefixer";

const api = axios.create({
    baseURL: "http://localhost:8080",
});

const apis = {
    getAllMahasiswa: () => api.get('/mahasiswa'),
    getMahasiswaByNim: (nim) => api.get(`/mahasiswa/${nim}`),
    CreateMahasiswa: (data) => api.post('/mahasiswa', data),
    updateMahasiswa: (nim, data) => api.put(`/mahasiswa/${nim}`,data),
};

export default apis;