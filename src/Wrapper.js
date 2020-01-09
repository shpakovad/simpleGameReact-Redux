import React from 'react';
import './App.css';
import Item from './Item'

class Wrapper extends React.Component {

    render = () => {
        let items = this.props.item.map((item) => {
            return <Item key={item.id} id={item.id} index={this.props.index}
                         itemOnClick={this.props.itemOnClick}/>
        })
        return (
            <div className="wrapper">
                {items}
            </div>
        );
    }
}

export default Wrapper;

