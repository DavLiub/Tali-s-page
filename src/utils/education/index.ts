import type {ToolsAndTechnologies} from "../skills";
import {skills} from "../skills";

export interface Course {
    name: string,
    program: string,
    programLink: string,
    end: string,
    experienceWith: ToolsAndTechnologies,
    certLink: string
}

export const highEducation = {
    name: "",
    faculty: "",
    level: "",
    start: "",
    end: "",
    link: "",
    experienceWith: [
        skills.skill1
    ]
}

export const courses:{[key: string]: Course} = {
    course1: {
        name: "Course 1",
        program: "Program 1",
        programLink: "https://www.program1.com",
        end: "2021-01-01",
        experienceWith: skills.skill1,
        certLink: "https://www.cert1.com"
    },
    course2: {
        name: "Course 2",
        program: "Program 2",
        programLink: "https://www.program2.com",
        end: "2021-01-01",
        experienceWith: skills.skill2,
        certLink: "https://www.cert2.com"
    }
}