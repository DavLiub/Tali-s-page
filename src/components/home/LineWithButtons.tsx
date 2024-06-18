import ButtonPoint from './ButtonPoint';

const LineWithButtons: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center h-full">
            <svg width="200" height="500" className="absolute">
                <path d="M100,0 Q200,250 100,500" stroke="blue" strokeWidth="4" fill="none" />
            </svg>
            <div className="absolute flex flex-col items-center justify-between h-full" style={{ height: '500px' }}>
                <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-3%, -50%)' }}>
                    <ButtonPoint tooltip="about" link="/about" />
                </div>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(24%, -50%)' }}>
                    <ButtonPoint tooltip="my cv" link="/cv" />
                </div>
                <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(4%, -50%)' }}>
                    <ButtonPoint tooltip="projects" link="/projects" />
                </div>
            </div>
        </div>
    );
};

export default LineWithButtons;
