import React, { Component } from 'react';

const ControllerDecorator = {
    decorate: (Component, stores, getState) => {

        return class controllerDecorator extends Component {
            constructor(props) {
                super(props);
                this.state = getState();
                this.onStoreChange = this.onStoreChange.bind(this);
            }
            componentDidMount() {
                stores.forEach(store =>
                    store.addChangeListener(this.onStoreChange)
                );
            }
            componentWillUnmount() {
                stores.forEach(store =>
                    store.removeChangeListener(this.onStoreChange)
                );
            }
            onStoreChange() {
                this.setState({ data: getState() });
            }
            render() {
                return <Component {...this.state} />;
            }
        };
    }
}

export default ControllerDecorator;
