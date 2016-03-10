import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header.react';        
    }
    render() {

        return (<div><h2 className='bordered'>Select policies to finance</h2>
                <p className='muted'><strong>Customer:</strong>  {this.props.customerName}</p>
                <p className='muted'><strong> Finance Provider:</strong> {this.props.financeProviderName}</p></div>);
    }
}
