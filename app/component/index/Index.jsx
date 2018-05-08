import React from 'react';
import './index.pcss';
import gif from '../../public/img/pic.gif'

class Index extends React.Component {
    render() {
        let b = a => a;
	    let c = b([1,2,3,4]);
	    let d = c.reduce((a,b)=>a+b);
		return (
            <div className="index">
                {d}<br/>
                这是首页<br/>
                <img src={gif} alt=""/>
            </div>
        );
    }
}

export default Index;