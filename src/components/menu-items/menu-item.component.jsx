import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <div className={`${size} menu_item`}
         onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div style = {{ backgroundImage: `url(${imageUrl})` }}
        className='background_image' />
        <div className='content'>
            <h3 className='title'>{title.toUpperCase()}</h3>
            <span className='sub_title'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);