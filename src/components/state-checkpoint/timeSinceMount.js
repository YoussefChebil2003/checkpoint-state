import React from 'react';

class TimeSinceMount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ time: prevState.time + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <p>Time since mount: {this.state.time} seconds</p>
            </div>
        );
    }
}

export default TimeSinceMount;