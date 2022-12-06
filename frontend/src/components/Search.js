import React from "react";

function Header() {
    return (
        <div className="search" class="input-group">
            <input type="search" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="btn-outline-primary">search</button>

        </div>
    );
}

export default Header;