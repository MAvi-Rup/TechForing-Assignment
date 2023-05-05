import React from 'react';

const Main = () => {
    return (
        <div className='container-fluid' style={{
            backgroundImage: `url("https://career.techforing.com/static/media/mainHome-banner.d2e3200c0b99ae632bfb.jpg")`, width: '100%'
        }}>
            <div className='container w-75 mx-auto'>
                <h1 className='text-center text-white fw-bold'>WORK AT TECHFORING LIMITED</h1>
                <p className='text-center text-white'>Turn your passion into a career</p>

                <div class="pb-4 w-50 mx-auto">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search by position / level / type / department"></input>
                </div>

                <div className='d-flex justify-content-center flex-wrap w-50 mx-auto pb-5'>
                    <div className='bg-white rounded me-2 p-3'>
                        <span>
                            Sales Manager
                        </span>
                        <span className='text-danger ms-1 fw-bold'>
                            Urgent
                        </span>
                    </div>
                    <div className='bg-white rounded me-2 p-3'>
                        <span>
                            General Manager
                        </span>
                        <span className='text-danger ms-1 fw-bold'>
                            Urgent
                        </span>
                    </div>
                    <div className='bg-white rounded me-2 p-3 mt-2'>
                        <span>
                            Software Project Manager
                        </span>
                        <span className='text-danger ms-1 fw-bold'>
                            Urgent
                        </span>
                    </div>
                    <div className='bg-white rounded me-2 p-3 mt-2'>
                        <span>
                            Sales Excutive
                        </span>
                        <span className='text-danger ms-1 fw-bold'>
                            Urgent
                        </span>
                    </div>
                    <div className='bg-white rounded me-2 p-3 mt-2'>
                        <span>
                            Content Writer
                        </span>
                        <span className='text-danger ms-1 fw-bold'>
                            Urgent
                        </span>
                    </div>
                    <div className='bg-white rounded me-2 p-3 mt-2'>
                        <span>
                            Sales Development Executive
                        </span>
                        <span className='text-danger ms-1 fw-bold'>
                            Urgent
                        </span>
                    </div>
                    <div className='bg-white rounded me-2 p-3 mt-2'>
                        <span>
                            General Manager
                        </span>
                        <span className='text-danger ms-1 fw-bold'>
                            Urgent
                        </span>
                    </div>


                </div>

                

            </div>

        </div>
    );
};

export default Main;
