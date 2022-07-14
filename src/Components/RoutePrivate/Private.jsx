import React , {useContext} from 'react'
import {Route, Redirect} from "react-router-dom";
import StoreContext  from '../Store/Context';
const RoutePrivate = ({component: Component, ...rest})=>{
    const { token } = useContext(StoreContext);
    
    return(
        <Route
        {...rest}
        render={() => token
            ? <Component {...rest} />
            : <useNavigate to="/login" />
        }
        />
    )

}

export default RoutePrivate;