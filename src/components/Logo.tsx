import React from 'react';

const Logo = () => {
    return (
        <div className="w-fit flex items-center space-x-4">
            <div>
                {
                    // <img src="/Logo.webp" alt="Logo" className="w-20 h-20 rounded-full"/>
                }
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-lg font-bold text-gray-200">David</p>
                <p className="text-lg font-light text-gray-100">Liubinskii</p>
            </div>
        </div>
    );
};

export default Logo;
