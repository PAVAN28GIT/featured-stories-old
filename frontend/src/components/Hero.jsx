import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/post');
    };

    return (
        <div className='text-white pt-32'>
            <div className="mt-[-70px] w-full mx-auto flex flex-col justify-center h-screen bg-center bg-cover"
                style={{ backgroundImage: "url('/images/tree.png')" }} >
                <div className="grid grid-cols-2 gap-4 mx-24 mb-32"> {/* Added pt-20 to move the grid up */}
                    <div className="flex flex-col "> {/* Added pt-20 to move the text part up */}
                        <p className='text-left text-3xl font-bold font-Afacad leading-tight sm:text-5xl md:text-7xl'>
                            The man <br />
                            who has <br />
                            <span className='text-left font-normal font-barriecito'>no imagination</span> <br />
                            <span className='text-left font-bold font-barriecito'>has no wings.</span>
                        </p>
                        <p className='text-sm font-thin text-left mt-4'>- MUHAMMAD ALI</p>
                    </div>
                    <div className="flex items-center justify-center  mb-12 ml-12 pb-28"> {/* Aligned items to start */}
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium py-3 text-black mt-20' onClick={handleGetStartedClick}>Get Started</button> {/* Added mt-20 to position the button */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
