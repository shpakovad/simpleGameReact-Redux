import React from 'react';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import sound from './sound/Terminator.mp3';
import UIfx from 'uifx';
import { getRandomIndexAC, itemOnClickAC} from "./reducer";
import {connect} from "react-redux";

class App extends React.Component {

    getRandomImageIndex = (getIndex) => {
        this.props.getRandomIndex(getIndex)
    };

    id = setInterval(() => {
        this.getRandomImageIndex()
    }, 700);

    itemOnClick = () => {
        this.props.itemOnClickAC(this.props.count);
        let tick = new UIfx(sound);
        tick.play();
    };

    render = () => {
        return (
            <div className='App'>
                <Wrapper item={this.props.item} index={this.props.index}
                         itemOnClick={this.itemOnClick}/>
                <Counter count={this.props.count}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        index: state.index,
        count: state.count,
        item: state.item,
        comp: state.comp
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getRandomIndex: (getIndex) => {
            const action = getRandomIndexAC(getIndex);
            dispatch(action)
        },
        itemOnClickAC: (newCount) => {
            const action = itemOnClickAC(newCount);
            dispatch(action)
        },
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);


export default ConnectedApp;

