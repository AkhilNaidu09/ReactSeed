import axios from 'axios';

export function GetAddressDetails() {
    axios.get(`https://reqres.in/api/users?page=2`)
    .then(res => {
    console.log(res);
    });
}
