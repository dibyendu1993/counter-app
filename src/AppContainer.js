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
        // this.ChngVal = this.ChngVal.bind(this);
    }
    Chngname(e) {
        //console.log(e.target.value)
        this.props.chngname(e.target.value);
    }
    onIncrement() {
        this.props.increment();
    }
    onDecrement() {
        this.props.decrement();
    }
    render() {
        const count=this.props.count;
        const name=this.props.name
    console.log(count)
    return (<div><App chngval={this.Chngval} chngname={this.Chngname} name={name} counter={count} increment={this.onIncrement} decrement={this.onDecrement} /></div>);
    }
}
function mapStateToProp(state){
    return{
        count:state.numcount,
        name:state.name
    }
}
export default connect(mapStateToProp, {increment, decrement,chngname})(AppContainer);