import React, { PureComponent } from 'react';

export class CreateProject extends PureComponent {
    componentDidMount() {
        window.SteemNinja.bindWidgetToDOM();
    }

    render() {
        return (
            <div>
                Waiting for widget
                {/* {<a title="Test Steem Ninja WIdget" data-name="https://impactn.herokuapp.com/" data-image="" data-referrer="vadkuhtin" href="https://widget.steem.ninja/widget.html?referrer=vadkuhtin" className="ninja-widget">Buy a Steem Account</a>} */}
            </div>
        );
    }
}
