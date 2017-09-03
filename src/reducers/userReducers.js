export default function reducer(
    // define the initital state here 
    state = {
        users: [],
        fetching: false,
        fetched: false,
        error: null
    }, action) {
        switch(action.type) {
            case "FETCH_USER": {
                return { 
                    ...state,
                    fetching: true 
                }
            }
            case "FETCH_USERS_FULFILLED": {
                return {
                    ...state,
                    fetching: false,
                    fetched: true,
                    users: action.payload
                    }
            }
            case "FETCH_USERS_REJECTED": {
                return {
                         ...state,
                         fetching: false,
                         error: action.payload
                       }
              }
        }
        return state;
    }