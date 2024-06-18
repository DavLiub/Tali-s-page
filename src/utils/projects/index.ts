import type {ToolsAndTechnologies} from "../skills";
import {languages, technologies, tools} from "../skills";

export interface Project {
    name: string;
    description: string;
    link: string;
    start: string;
    end: string;
    experienceWith: ToolsAndTechnologies[];
}

export const projects: {[key: string]: Project} = {
    project1: {
        name: "Project 1",
        description: "This is the first project",
        link: "/project1",
        start: "2021-01-01",
        end: "2021-01-02",
        experienceWith: [
            technologies.React
        ]
    },
    project2: {
        name: "Project 2",
        description: "This is the first project",
        link: "/project1",
        start: "2021-01-01",
        end: "2021-01-02",
        experienceWith: [
            technologies.React
        ]
    }
}