import React from 'react';

const Navbar: React.FC = () => (
    <nav className="nav">
        <div className="nav-wrapper light-blue accent-3 px1">
            <a href="/" className="brand-logo">
                TodoApp
            </a>
            <ul className="right hide-on-med-and-down">
                <li>
                    <a href="/">Список дел</a>
                </li>
                <li>
                    <a href="/">Информация</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;