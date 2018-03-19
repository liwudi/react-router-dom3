/**
 * Created by mapbar_front on 2018/3/18.
 */
import React,{ Component} from 'react';

export default class AuthButton extends Component{
    clickEvent(){
        //this.props.parent && this.props.parent();
        window.localStorage.setItem('isLogin',false);
    }
    render(){
        return (
            <div>
                {
                    this.props.isLogin ? <p>Welcome!<button onClick={this.clickEvent}>Sign out</button></p> : <p>You are not logged in.</p>
                }
            </div>
        )
    }
}