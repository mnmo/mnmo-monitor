import {createElement} from 'react';
import LoginForm from '../components/login';
import DashboardScreen from '../components/dashboard';
import ChangePasswordScreen from '../components/password';

class Router {
    render() {
        const screen = (this.props.session.token === null) ? LoginForm : 
                (this.props.ui.screen === 'password') ? ChangePasswordScreen :
                DashboardScreen;
        return (createElement(screen, this.props));
    }
}

export default Router;
