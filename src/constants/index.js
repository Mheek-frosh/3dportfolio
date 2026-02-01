
import {
    ScanFace, // For Profile
    Briefcase, // For Experience
    Code2, // For Skills
    AppWindow, // For Projects
    Mail, // For Contact
} from "lucide-react";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: Code2,
    },
    {
        title: "Flutter Developer",
        icon: AppWindow,
    },
    {
        title: "Backend Developer",
        icon: Briefcase,
    },
    {
        title: "Content Creator",
        icon: ScanFace,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: "html",
    },
    {
        name: "CSS 3",
        icon: "css",
    },
    {
        name: "JavaScript",
        icon: "javascript",
    },
    {
        name: "TypeScript",
        icon: "typescript",
    },
    {
        name: "React JS",
        icon: "react",
    },
    {
        name: "Redux Toolkit",
        icon: "redux",
    },
    {
        name: "Tailwind CSS",
        icon: "tailwind",
    },
    {
        name: "Node JS",
        icon: "nodejs",
    },
    {
        name: "MongoDB",
        icon: "mongodb",
    },
    {
        name: "Three JS",
        icon: "threejs",
    },
    {
        name: "git",
        icon: "git",
    },
    {
        name: "figma",
        icon: "figma",
    },
    {
        name: "docker",
        icon: "docker",
    },
];

const experiences = [
    {
        title: "IT Support / UI/UX Designer",
        company_name: "SRM Solutions",
        icon: Briefcase,
        iconBg: "#383E56",
        date: "2025",
        points: [
            "Played a key role in designing company profiles and performing system upgrades.",
            "Provided feedback to improve design maintainability and conducted network troubleshooting.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "EduTech",
        icon: Code2,
        iconBg: "#E6DEDD",
        date: "2024",
        points: [
            "Built a mobile-first education platform with strong API integration and payment gateway troubleshooting.",
            "Boosted student and teacher engagement through responsive UI/UX design.",
            "Implemented responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Mobile Frontend Engineer",
        company_name: "Afretrade",
        icon: AppWindow,
        iconBg: "#383E56",
        date: "2023",
        points: [
            "Developed a mobile-first e-commerce platform, increasing mobile sales by 25%.",
            "Implemented robust error handling for third-party APIs, enhancing app stability.",
            " participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "IT Support Officer",
        company_name: "Nigerian Breweries",
        icon: Briefcase,
        iconBg: "#E6DEDD",
        date: "2021",
        points: [
            "Provided hardware/software technical support and upgraded internal systems.",
            "Maintained website and ensured seamless network connectivity across teams.",
            "Assisted with CCTV installation and ICT infrastructure maintenance.",
        ],
    },
    {
        title: "IT Lead",
        company_name: "Star Reach Integrate Service",
        icon: Briefcase,
        iconBg: "#383E56",
        date: "2018 - 2019",
        points: [
            "Delivered continuous technical support and managed website updates.",
            "Led the team for ICT upgrades and implemented internal system maintenance routines.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Mobile Education Platform",
        description:
            "Built a mobile-first education platform with strong API integration and payment gateway features.",
        tags: [
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
            {
                name: "dart",
                color: "green-text-gradient",
            },
            {
                name: "api",
                color: "pink-text-gradient",
            },
        ],
        image: null, // Placeholder to be handled in component
        source_code_link: "https://github.com/",
    },
    {
        name: "E-Commerce App",
        description:
            "Developed a mobile-first e-commerce platform that increased mobile sales by 25%. Features robust error handling.",
        tags: [
            {
                name: "react-native",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: null,
        source_code_link: "https://github.com/",
    },
    {
        name: "Company Profiles Design",
        description:
            "Designed comprehensive company profiles and performed system upgrades to enhance brand identity.",
        tags: [
            {
                name: "ui/ux",
                color: "blue-text-gradient",
            },
            {
                name: "figma",
                color: "green-text-gradient",
            },
            {
                name: "branding",
                color: "pink-text-gradient",
            },
        ],
        image: null,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
