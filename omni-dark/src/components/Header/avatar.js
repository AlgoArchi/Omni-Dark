import React from 'react';

import './header.css';
import logo from '../../image/next.png';

const Avatar = () => {
    return (
        <div className="avatar">
			<img src={logo} alt="avatar" height="70" />
        </div>
    );
};

export default Avatar;