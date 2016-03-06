import React, { Component } from 'react';

import PoliciesTableRow from './PoliciesTableRow.react';

export default class PoliciesTable extends Component {
    constructor(props) {
        super(props);  
        this.handleSelected = this.handleSelected.bind(this);
        this.renderRows = this.renderRows.bind(this);
        this.displayName = 'PoliciesTable.react';
    }
    renderRows() {

        if (this.props.customer === undefined ||
            this.props.customer.policies == undefined ||
            this.props.customer.policies.length === 0) {
            return null;
        }
        
        return  this.props.customer.policies.map((policy) => {
            return(<PoliciesTableRow handleSelected={this.handleSelected} policy={policy} />);
     });
    }
    render() {

        return (<div className='container'>
                <div className='row'>
                    <h2 className='bordered'>Select policies to finance</h2>
                    <h4 className='muted'>Customer: {this.props.customerName}</h4>
                    <table className='table table-hover table-striped table-bordered'>
                    <thead><tr>
                    <th>Policy Reference</th>
                    <th>Insurer</th>
                    <th>Outstanding Amount</th>
                    <th>Select</th>
                    </tr></thead>
                    <tbody>{this.renderRows()}</tbody>
                    </table>
                </div>
            </div>);
    }
}
