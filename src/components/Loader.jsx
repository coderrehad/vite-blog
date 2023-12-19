import React from 'react';

const Loader = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='flex justify-center items-center h-screen'>
                    <div className='text-center'>
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loader;