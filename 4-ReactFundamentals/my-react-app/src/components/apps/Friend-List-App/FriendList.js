import React, { Component } from 'react';
import axios from 'axios';
import FaTrashO from 'react-icons/lib/fa/trash-o'

const API_BASE = "http://rest.learncode.academy/api/efa/friends";

class FriendList extends Component {

    constructor(props) {
        super(props)
        this.state = { friends: [] };
    }

    componentDidUpdate(nextProps) {
        //console.log(nextProps);
        this.setState({ friends: nextProps.props })
        //console.log(this.state);
    }

renderFriends() {
        console.log(this.state.friends)
        if (this.state.friends) {
            const friendsFiltered = this.state.friends.filter(friend => friend.id)
            return friendsFiltered.map(friend => 
                <div key={friend.id}>
                    <li className="list-group-item">
                        <strong>Name:</strong> {friend.name}
                        <br />
                        <strong>Age:</strong> {friend.age}
                        <button onClick={() => { this.removeFriend(this, friend) }}
                            className="btn btn-danger trash">
                            <span><FaTrashO /></span>
                        </button>
                    </li>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Waiting for friends</h1>
                    {this.state}
                </div>
            );
        }

    }

    removeFriend(event, friend) {
        var id = friend.id;
        var tempFriends = this.state.friends;
        axios.delete(`${API_BASE}/${id}`)
            .then( response => {
                var deleteFriend = tempFriends.indexOf(friend);
                tempFriends.splice(deleteFriend, 1);
                this.setState({ friends: tempFriends });
            });
    }

    

    render() {
        return (
            <div>
                <div>
                    <div className="col-xs-2">
                    </div>
                    <div className="col-xs-6">
                        <h3>List of Friends</h3>
                        <ul className="list-group friends">
                            {this.renderFriends()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default FriendList;