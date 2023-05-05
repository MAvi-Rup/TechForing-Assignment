import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar" style={{ backgroundColor: '#182F59' }}>
                <div class="container-fluid">

                    <a className="navbar-brand text-white" href="#">
                        <div className='d-flex align-items-center'>
                            <img className='me-3' src="https://career.techforing.com/static/media/Main-logo-white-.736e953d98c765398bd7.png" alt="" width="40" height="40" class="d-inline-block align-text-top" />
                            <span><span className='fs-5' style={{ marginBottom: "-15px" }}>TechForing</span> <br /> <span className='fs-6'>Shapping Tomorrows Cybersecurity</span></span>
                        </div>

                    </a>
                    <form class="d-flex">

                        <button class="btn btn-outline-success me-3" type="submit">SIGN IN</button>
                        <button class="btn btn-success" type="submit">SIGN UP</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;