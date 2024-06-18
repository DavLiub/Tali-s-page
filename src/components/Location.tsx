const Location: React.FC = () => {
    const handleButtonClick = () => {
        window.open("https://maps.app.goo.gl/TKj4Bz2FcmuXukqZ6", "_blank");
    };

    return (
        <div>
            <button
                onClick={handleButtonClick}
                className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

            </button>
        </div>
    );
};

export default Location;
