
import oneinstanceaxios from '../Axios';
import store from '../store';
import * as actionTypes from '../store/action';
export const userGet = () => {
    store.dispatch({type:actionTypes.USERDATALOADING})
    
    oneinstanceaxios.get('https://jsonplaceholder.typicode.com/users')
    .then(
       (result) => {
           console.log("get call result of users", result)
           store.dispatch({type:actionTypes.USERDATASUCCESS, data:result.data})
       }
    )
    .catch(
        (error) => {
            console.log("error ------>", error, error.data)
            store.dispatch({type:actionTypes.USERDATAFAILURE, errordata:error})
        }
    )   
return null;
}

export const todoGet = () => {
    store.dispatch({type:actionTypes.TODODATALOADING})
    
    oneinstanceaxios.get('https://jsonplaceholder.typicode.com/todos')
    .then(
       (result) => {
           console.log("get call result of users", result)
           store.dispatch({type:actionTypes.TODODATASUCCESS, data:result.data})
       }
    )
    .catch(
        (error) => {
            console.log("error ------>", error, error.data)
            store.dispatch({type:actionTypes.TODODATAFAILURE, errordata:error})
        }
    )   
return null;
}