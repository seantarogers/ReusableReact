import React, { Component } from 'react';

export default class PoliciesTableRow extends Component {
    constructor(props) {
        super(props);  
        this.handleRowSelected = this.handleRowSelected.bind(this);
        this.displayName = 'PoliciesTableRow.react';
    }
    handleRowSelected() {
        const checked = this.refs.checkbox.getDOMNode().checked;
        this.props.handleSelected({selected: !checked, id: this.props.policy.id});            
    }
    render() {

        if (this.props.policy === undefined) {
            return null;
        }
        
        return(<tr onClick={this.handleRowSelected} key={this.props.policy.id} >
                        <td>{this.props.policy.id}</td>
                        <td>{this.props.policy.insurer}</td>
                        <td> {this.props.policy.outstandingAmount}</td>
                        <td><input type='checkbox' ref='checkbox' checked={this.props.policy.selected} /></td>
                </tr>);     
    }
}
    