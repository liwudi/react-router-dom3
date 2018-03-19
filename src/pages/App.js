import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

import AuthButton from '../components/AuthButton';
import Login from './login/Login';
import Public from './public/Public';
import Protected from './protected/Protected';

import '../styles/App.css';

class PrivateRoute extends Component {

    render() {
        console.log(this.props.isLogin);
        if (this.props.isLogin) {
            return (
                <Route path={this.props.path} component={Protected}/>
            )
        } else {
            return (
                <Redirect from={this.props.path} to='/login'/>
            )
        }
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }
    componentDidMount(){
        //console.log(Boolean(localStorage.getItem('isLogin')));
        setInterval(()=>{
            this.setState({
                isLogin: (localStorage.getItem('isLogin')) == 'true' ? true : false
            })
        },200)
    }

    render() {
        return (
            <Router>
                <div>
                    <AuthButton  isLogin={this.state.isLogin}/>
                    <ul>
                        <li><Link to="/public">Public Page</Link></li>
                        <li><Link to="/protected">Protected Page</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/public" component={Public}/>
                        <Route path="/login" component={Login}/>
                        <PrivateRoute isLogin={this.state.isLogin} path="/protected" component={Protected}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
