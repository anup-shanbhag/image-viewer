import React from 'react';
import './Header.css';

const Header = function (props) {
    return (
        React.createElement("div", { className: "hdr-container" },
            React.createElement("span", { className: "hdr-text" }, "Image Viewer")
        )
    )
}

export default Header;