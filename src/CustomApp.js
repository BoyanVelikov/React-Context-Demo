import React from 'react';

const ThemeContext = React.createContext('light');

export default class CustomApp extends React.Component {
    render() {
        return (<ThemeContext.Provider value="dark">
        <Toolbar/>  
        </ThemeContext.Provider>
        )     
    }
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        return <Button theme={this.context}/>;
    }
}

function Toolbar(props) {
    return <ThemedButton/>;
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <button onClick={() => {console.log(this.props)}}>Context Button</button>
    }
}