import React from 'react';
import {connect} from 'react-redux';
import App from './App';
import {increment, decrement, chngname} from './actions';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.Chngname = this.Chngname.bind(this);
    }
    Chngname() {
        this.props.chngname();
    }
    onIncrement() {
        this.props.increment();
    }
    onDecrement() {
        this.props.decrement();
    }
    render() {
        const count=this.props.count;
    console.log(count)
    return (<div><App chngname={this.Chngname} counter={count} increment={this.onIncrement} decrement={this.onDecrement} /></div>);
    }
}
function mapStateToProp(state){
    return{
        count:state.numcount
    }
}
export default connect(mapStateToProp, {increment, decrement,chngname})(AppContainer);