import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-success">
                    <div>
                        <a href='http://localhost:3000/' className = "navbar-brand ">
                            Student Data Record
                        </a>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent