import React from "react";

export const withSubscription = (WrappedComponent, data) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: data
            };
        }

        componentDidMount() {
            // TBD
        }

        componentWillUnmount() {
            // TBD
        }

        handleChange() {
            this.setState({
                data: [...this.state.data, this.state.data.length]
            });
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    };
}