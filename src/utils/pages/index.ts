import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";
import Cv from "../../pages/CV";
import Education from "../../components/cvPages/Education";
import Index from "../../components/cvPages/experience";
import Hobbies from "../../components/cvPages/Hobbies";
import Languages from "../../components/cvPages/Languages";

export interface Page {
    name: string;
    link: string;
    component: React.FC;
}

export const pages:{[key:string]: Page} = {
    home: {
        name: "Home",
        link: "/",
        component: Home
    },
    cv: {
        name: "My CV",
        link: "/cv",
        component: Cv
    },
    about: {
        name: "About",
        link: "/about",
        component: About
    },
    projects: {
        name: "Projects",
        link: "/projects",
        component: Projects
    },
    contact: {
        name: "Contact",
        link: "/contact",
        component: Contact
    }
}

export const cvPages:{[key:string]: Page} = {
    education: {
        name: "Education",
        link: "/cv/education",
        component: Education
    },
    experience: {
        name: "Experience",
        link: "/cv/experience",
        component: Index
    },
    languages: {
        name: "Languages",
        link: "/cv/languages",
        component: Languages
    },
    hobbies: {
        name: "Hobbies",
        link: "/cv/hobbies",
        component: Hobbies
    }
}

