import React from 'react';
import {connect} from 'react-redux';
import App from './App';
import {changevalue, increment, decrement, changename} from './actions';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.Changename = this.Changename.bind(this);
        this.ChangeValue = this.ChangeValue.bind(this);
    }
    Changename(e) {
        this.props.changename(e.target.value);
    }
    ChangeValue(e) {
        this.props.changevalue(e.target.value);
    }
    onIncrement() {
        this.props.increment(this.props.input);
    }
    onDecrement() {
        this.props.decrement(this.props.input);
    }
    render() {
        const count=this.props.count;
        const name=this.props.name
    return (<div><App changevalue={this.ChangeValue} changename={this.Changename} name={name} counter={count} increment={this.onIncrement} decrement={this.onDecrement} /></div>);
    }
}
function mapStateToProp(state){
    return{
        input:state.countername.counterval,
        count:state.countervalue && state.countervalue.numcount,
        name:state.countername.name
    }
}
export default connect(mapStateToProp, {changevalue, increment, decrement, changename})(AppContainer);