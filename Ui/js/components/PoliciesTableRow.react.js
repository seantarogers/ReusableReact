import React, { Component } from 'react';

export default class PoliciesTableRow extends Component {
    constructor(props) {
        super(props);  
        this.handleSelected = this.handleSelected.bind(this);
        this.displayName = 'PoliciesTableRow.react';
    }
    handleSelected() {
        const checked = this.refs.checkbox. getDOMNode().checked;
        this.props.handleSelected({selected: checked, id: this.props.policy.id});            
    }
    render() {

        if (this.props.policy === undefined) {
            return null;
        }
        
            return(<tr key={this.props.policy.id} >
                        <td>{this.props.policy.id}</td>
                        <td>{this.props.policy.insurer}</td>
                        <td> {this.props.policy.outstandingAmount}</td>
                        <td><input type='checkbox' onChange={this.handleSelected} ref='checkbox' checked={this.props.policy.selected} /></td>
                </tr>);     
    }
}
    