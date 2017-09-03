import axios from "axios";

export function fetchUsers() {
    axios.get('http://reqres.in/api/users?page=1')
         .then((response) => {
             dispatch({type:'FETCH_USER_FULFILLED', payload:response.data.data});
         })
         .catch((error) => {
            dispatch({type:'FETCH_USERS_REJECTED',payload:err});
         })
}