import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import App from './App';
import { handleSubmit, changevalue, increment, decrement, changename } from './actions';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.HandleSubmit = this.HandleSubmit.bind(this);
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
    onIncrement(e) {
        e.preventdefaul()
        this.props.increment(this.props.input);
    }
    onDecrement() {
        this.props.decrement(this.props.input);
    }
    HandleSubmit() {
        let temp = this.props.formVal.values.firstName
        //console.log(this.props.formVal.values.firstName)
        if (temp.length < 3) {
            window.alert("min 4 characters")
        }
        else {
            this.props.handleSubmit(temp)
        }
    }
    render() {

        const count = this.props.count;
        const name = this.props.name;
        console.log(this.props)
        const formName = this.props.formName;
        // /const formName ="hello"
        return (<div><App changevalue={this.ChangeValue} formName={formName} onSubmit={this.HandleSubmit} changename={this.Changename} name={name} counter={count} increment={this.onIncrement} decrement={this.onDecrement} /></div>);
    }
}
function mapStateToProp(state) {
    return {
        input: state.countername.counterval,
        count: state.countervalue && state.countervalue.numcount,
        name: state.countername.name,
        formVal: state.form.contact,
        formName:state.countername.formName
    }
}
export default connect(mapStateToProp, { handleSubmit, changevalue, increment, decrement, changename })(AppContainer);