import React from 'react';
import SkillsBar from "../SkillsBar";
import ExperienceList from "./ExperienceList";

const Experience = () => {
    return (
        <div className={"flex"}>

            <div>
                <SkillsBar />
            </div>
            <div>
                <ExperienceList />
            </div>


        </div>
    );
};

export default Experience;