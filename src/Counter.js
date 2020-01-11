import React from 'react';
import './App.css';

class Counter extends React.Component {
    render = () => {
        return (
            <div className="counter">
                <span className='user'>  User:  </span> {this.props.count}
            </div>
        );
    }
}

export default Counter;

