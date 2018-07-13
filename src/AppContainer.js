import React from 'react';
import {connect} from 'react-redux';
import App from './App';
import {chngevalue, increment, decrement, changename} from './actions';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.Changename = this.Changename.bind(this);
        this.ChngeValue = this.ChngeValue.bind(this);
    }
    Changename(e) {
        //console.log(e.target.value)
        this.props.changename(e.target.value);
    }
    ChngeValue(e) {
        console.log(e.target.value)
        this.props.chngevalue(e.target.value);
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
    console.log(this.props)
    return (<div><App chngevalue={this.ChngeValue} changename={this.Changename} name={name} counter={count} increment={this.onIncrement} decrement={this.onDecrement} /></div>);
    }
}
function mapStateToProp(state){
    return{
        count:state.numcount,
        name:state.name
    }
}
export default connect(mapStateToProp, {chngevalue, increment, decrement, changename})(AppContainer);