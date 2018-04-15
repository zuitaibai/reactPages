import React from 'react';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        };
    }
    componentDidMount(){
        fetch('/some/path').then(res=>res.json()).then(d=>{
            this.setState({color:d.color});
        });
    }

    componentWillUnmount(){ }
    render() {
        return (
            <React.Fragment>
                Some text. color: {this.state.color}
                <h2>这是demo</h2>
                <div flex="main:center cross:center" style="width:500px; height: 500px; background: #108423">
                    <div style="background: #fff"> to see if this is in the center </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Index;