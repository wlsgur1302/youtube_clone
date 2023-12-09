import React from 'react'

import { headerMenu } from '../../data/header'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
    const location = useLocation();

    return (
        <nav className='header_menu'>
            <ul className='menu'>
                {headerMenu.map((menu, key) => (
                    // 삼항연산자로 클릭한 메뉴만 활성화하기 
                    <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
                        <Link to={menu.src}>
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu
