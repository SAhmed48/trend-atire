import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div style = {{ backgroundImage: `url(${imageUrl})` }}
    className={`${size} menu_item`}>
        <div className='content'>
            <h3 className='title'>{title}</h3>
            <span className='sub_title'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;