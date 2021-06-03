import React, {Component} from 'react';
import PropTypes from 'prop-types'

class UserItem extends Component{

    static propTypes = {
        user : PropTypes.object.isRequired,
    }

    render(){
     const {avatar_url , login, html_url} = this.props.user;
 
        return (
            <div className='card text-center'> 
            {/* <div> */}
            <img src={avatar_url} alt='img1' className='round-img' style={{width:'60px', alignSelf : 'center'}}  />
            <h5> {login}</h5>
            
            <a href={html_url} className='btn btn-dark btn-sm my-1'>more</a>
            {/* </div> */}
            </div>
        )
    }
}

export default UserItem;