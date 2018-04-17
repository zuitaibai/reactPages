import React from 'react';
import './common.pcss';
const Header = () =>
    <div className="top">
        <i className="logo"/>这是头部
        <ul className="nav">
            <li><a href="/index.html">首页</a></li>
            <li><a href="/shop.html">商城</a></li>
            <li><a href="/demo.html">demo</a></li>
        </ul>
    </div>
;

export default Header;