import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component{
    render(){
        const user=this.props.users.find(user=>user.id===this.props.userId);
        if(!user){
            return null;
        }
        return (
            <div className='header'>{user.name}</div> 
        );
    }
    componentDidMount(){
       // console.log(this.props.userId);
        this.props.fetchUser(this.props.userId);
    }
}
const mapStateToProps=(state)=>{
    //console.log(state);
    return {users:state.users};
}
export default connect(mapStateToProps,{fetchUser})(UserHeader);