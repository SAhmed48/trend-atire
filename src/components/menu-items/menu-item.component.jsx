import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu_item`}>
        <div style = {{ backgroundImage: `url(${imageUrl})` }}
        className='background_image' />
        <div className='content'>
            <h3 className='title'>{title.toUpperCase()}</h3>
            <span className='sub_title'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;