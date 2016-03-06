import React, { Component } from 'react';

export default function connectToStores(Component, stores, getState) {
    const StoreConnection = React.createClass({
        getInitialState() {
            return getState();
        },
        componentDidMount() {
            stores.forEach(store =>
                store.addChangeListener(this.handleStoresChanged)
            );
        },
        componentWillUnmount() {
            stores.forEach(store =>
                store.removeChangeListener(this.handleStoresChanged)
            );
        },
        handleStoresChanged() {
            if (this.isMounted()) {
                this.setState(getState());
            }
        },
        render() {
            return <Component {...this.state} />;
        }
    });
    return StoreConnection;
};