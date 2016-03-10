import React, { Component } from 'react';

import PoliciesTableRow from './PoliciesTableRow.react';

export default class PoliciesTable extends Component {
    constructor(props) {
        super(props);  
        this.renderRows = this.renderRows.bind(this);
        this.displayName = 'PoliciesTable.react';
    }
    renderRows() {

        if (this.props.data === undefined ||
            this.props.data === null ||
            this.props.data.policies === undefined ||
            this.props.data.policies === null ||
            this.props.data.policies.length === 0) {
            return null;
        }
        
        return  this.props.data.policies.map((policy) => {
            return(<PoliciesTableRow handleSelected={this.props.handleSelected} policy={policy} />);
     });
    }
    render() {

        return (<table className='table table-hover table-striped table-bordered'>
                    <thead><tr>
                    <th>Policy Reference</th>
                    <th>Insurer</th>
                    <th>Outstanding Amount</th>
                    <th>Select</th>
                    </tr></thead>
                    <tbody>{this.renderRows()}</tbody>
                    </table>);
    }
}
