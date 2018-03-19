/**
 * Created by mapbar_front on 2018/3/18.
 */
import React,{ Component} from 'react';

export default class Login extends Component{
    clickEvent(){
        window.localStorage.setItem('isLogin', true)
    }
    render(){
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        //console.log('form',from)
        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={()=>this.clickEvent()}>Log in</button>
            </div>
        )
    }
}