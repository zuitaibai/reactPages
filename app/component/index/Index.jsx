import React from 'react';
import './index.pcss';

class Index extends React.Component {
	render() {
	    let b = a => a;
	    let c = b([1,2,3,4]);
	    let d = c.reduce((a,b)=>a+b);
		return (
            <div className="index">{d}{d}{d}
                这是首页
            </div>
        );
    }
}

export default Index;