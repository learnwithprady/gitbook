import React from 'react';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Login from '../LoginPage';
import App from '../App';
import PrivateRoute from '../_components/PrivateRoute';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         fakeAuth.isAuthenticated === true
//           ? <Component {...props} />
//           : <Redirect to='/login' />
//       )} />
// );


const AppRouter = () => {
    return (
        <Router>
            <div>
                <Route path="/login" component={Login}/>
                <Route path='/app' component={App} />
            </div>
        </Router>
    );
};

export default AppRouter;