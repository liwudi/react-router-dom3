/**
 * Created by mapbar_front on 2018/3/18.
 */
import React,{ Component} from 'react';

export default class Home extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.match.params.id}</h1>
            </div>
        )
    }
}