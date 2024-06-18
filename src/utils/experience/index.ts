import type {ToolsAndTechnologies} from "../skills";
import {technologies, tools} from "../skills";


export interface Experience {
    companyName: string;
    companyLogo?: string;
    position: Position[];
    startDate?: string;
    endDate?: string;
    companyLink: string;
}

export interface Position {
    position: string;
    startDate?: string;
    endDate?: string;
    description: string[];
    experienceWith?: ToolsAndTechnologies[];
}

export const experience: { [key: string]: Experience } = {
    company1: {
        companyName: "Company 1",
        companyLogo: "/companiesLogo/defaultLogo.jpg",
        position: [
            {
                position: "QA Engineer",
                startDate: "01.01.2020",
                endDate: "01.01.2021",
                description: [
                    "Description 1",
                    "Description 2"
                ],
                experienceWith: [
                    tools.DevTools,
                    technologies.React
                ]
            }
        ],
        companyLink: "https://www.company1.com"
    },
    company2: {
        companyName: "Company 2",
        companyLogo: "/companiesLogo/defaultLogo.png",
        position: [
            {
                position: "QA Engineer",
                startDate: "01.01.2020",
                endDate: "01.01.2021",
                description: [
                    "Description 1",
                    "Description 2"
                ],
                experienceWith: [
                    tools.DevTools,
                    technologies.React
                ]
            },
            {
                position: "Junior QA Engineer",
                startDate: "01.01.2020",
                endDate: "01.01.2021",
                description: [
                    "Description 1",
                    "Description 2"
                ],
                experienceWith: [
                    tools.DevTools,
                    technologies.React
                ]
            }
        ],
        companyLink: "https://www.company2.com"
    }

};
