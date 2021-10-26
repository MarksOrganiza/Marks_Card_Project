import instance from '../../axiosInstance';

export const login = (data)  => {
    instance.post('/login',data)
    .then((response)=> console.log(response))
    .catch((error) => console.log(error))
}