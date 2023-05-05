import React from 'react';

const Position = () => {
    return (
        <div className='container w-75 m-auto '>
            <h1 className='text-center fs-3 fw-bold mt-4'>BROWSE OPEN POSITIONS BY CATEGORY</h1>
            <p className='text-center'>We are always on the lookout for talanted people</p>

            <div class="accordion accordion-flush mb-5" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Sales Marketing
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body bg-light">
                            <div className='d-flex justify-content-between align-items-center mb-3 bg-white'>
                                <span>Sales Manager</span>
                                <button className='btn btn-primary'>Apply Now</button>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mb-3 bg-white'>
                                <span>Business Research Analyst</span>
                                <button className='btn btn-primary'>Apply Now</button>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mb-3 bg-white'>
                                <span>Business Research Analys</span>
                                <button className='btn btn-primary'>Apply Now</button>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mb-3 bg-white'>
                                <span>Business Research Analyst</span>
                                <button className='btn btn-primary'>Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Position;