export interface ToolsAndTechnologies {
    name: string;
    iconLink: string;
    experience: number;
}


export const skills: { [key: string]: ToolsAndTechnologies } = {
    skill1: {
        name: "Skill 1",
        iconLink: "",
        experience: 0.5
    },
    skill2: {
        name: "Skill 2",
        iconLink: "",
        experience: 0.5
    },
    skill3: {
        name: "Skill 3",
        iconLink: "",
        experience: 0.5
    }
};

export const tools: { [key: string]: ToolsAndTechnologies } = {
    Postman: {
        name: "Postman",
        iconLink: "https://www.postman.com/",
        experience: 0.5
    },
    Jira: {
        name: "Jira",
        iconLink: "https://www.atlassian.com/software/jira",
        experience: 0.5
    },
    Charles: {
        name: "Charles",
        iconLink: "https://www.charlesproxy.com/",
        experience: 0.5
    },
    K6: {
        name: "K6",
        iconLink: "https://k6.io/",
        experience: 0.5
    },
    Playwright: {
        name: "Playwright",
        iconLink: "https://playwright.dev/",
        experience: 0.5
    },
    PyTest: {
        name: "PyTest",
        iconLink: "https://docs.pytest.org/en/7.0.x/",
        experience: 0.5
    },
    DevTools: {
        name: "DevTools",
        iconLink: "https://developer.chrome.com/docs/devtools/",
        experience: 0.5
    }
};

export const technologies: { [key: string]: ToolsAndTechnologies } = {
    React: {
        name: "React",
        iconLink: "https://reactjs.org/",
        experience: 0.5
    },
    NodeJS: {
        name: "NodeJS",
        iconLink: "https://nodejs.org/",
        experience: 0.5
    },
    TailwindCSS: {
        name: "TailwindCSS",
        iconLink: "https://tailwindcss.com/",
        experience: 0.5
    },
    Redux: {
        name: "Redux",
        iconLink: "https://redux.js.org/",
        experience: 0.5
    }
};

export const languages: { [key: string]: ToolsAndTechnologies } = {
    JavaScript: {
        name: "JavaScript",
        iconLink: "https://www.javascript.com/",
        experience: 0.5
    },
    TypeScript: {
        name: "TypeScript",
        iconLink: "https://www.typescriptlang.org/",
        experience: 0.5
    },
    Python: {
        name: "Python",
        iconLink: "https://www.python.org/",
        experience: 0.5
    },
    Java: {
        name: "Java",
        iconLink: "https://www.java.com/",
        experience: 0.5
    }
};
