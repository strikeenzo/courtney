import ChatImg from "../assets/chat.png";
import EcommerceImg from "../assets/ecommerce.png";
import PMImg from "../assets/pm.png";
import SaaSImg from "../assets/saas.png";

export const content = {
    navbar: {
        navlinks: ['Home', 'About', 'Projects', 'Contact'] as const
    },
    project : {
        projects : [
            {
                title: "Cloud Infrastructure Modernization",
                desc: "Helped a growing company migrate legacy systems to a secure and scalable cloud environment.",
                tech: [
                    "AWS",
                    "Cloud Architecture",
                    "DevOps",
                    "Security"
                ],
                image: ChatImg,
                alt: "Realtime Chat App screenshot",
            },
            {
                title: "Custom Business Management Platform",
                desc: "Developed a tailored application to automate workflows and improve operational visibility.",
                tech: [
                    "React",
                    "FastAPI",
                    "PostgreSQL",
                    "API Integration"
                ],
                image: EcommerceImg,
                alt: "E-commerce Platform screenshot",
            },
            {
                title: "AI-Powered Business Automation",
                desc: "Implemented intelligent automation tools to reduce repetitive tasks and increase productivity.",
                tech: [
                    "AI",
                    "Automation",
                    "Python",
                    "Machine Learning"
                ],
                image: PMImg,
                alt: "Project Management Tool screenshot",
            },
            {
                 title: "Cybersecurity Improvement Program",
                desc: "Strengthened business security through system assessments, access control, and monitoring.",
                tech: [
                    "Cybersecurity",
                    "Network Security",
                    "Compliance"
                ],
                image: SaaSImg,
                alt: "SaaS Analytics Dashboard screenshot",
            },
        ]
    },
    skill: {
        frontEnd : [
            { name: "React", level: "Advanced", value: 90 },
            { name: "TypeScript", level: "Advanced", value: 85 },
            { name: "Next.js", level: "Advanced", value: 82 },
            { name: "Tailwind CSS", level: "Advanced", value: 88 },
            { name: "HTML", level: "Expert", value: 95 },
            { name: "CSS", level: "Expert", value: 92 },
        ],
        backEnd : [
            { name: "Node.js", level: "Advanced", value: 88 },
            { name: "Express", level: "Advanced", value: 84 },
            { name: "NestJS", level: "Intermediate", value: 75 },
            { name: "TypeORM", level: "Intermediate", value: 72 },
            { name: "PostgreSQL", level: "Advanced", value: 80 },
            { name: "MongoDB", level: "Advanced", value: 78 },
        ],
        cloud : [
            { name: "AWS (Lambda, S3, RDS)", level: "Intermediate", value: 76 },
            { name: "Vercel", level: "Advanced", value: 85 },
            { name: "Netlify", level: "Advanced", value: 82 },
            { name: "Docker", level: "Intermediate", value: 74 },
        ],
        tools : [
            { name: "Git", level: "Expert", value: 93 },
            { name: "Jest", level: "Advanced", value: 80 },
            { name: "ESLint", level: "Advanced", value: 86 },
            { name: "Prettier", level: "Advanced", value: 88 },
            { name: "CI/CD", level: "Intermediate", value: 72 },
            { name: "Webpack", level: "Intermediate", value: 70 },
        ],
    },
    contact : {
        contactItems : [
            {
            label: "Email",
            value: "hello@jamesblack.dev",
            href: "mailto:hello@jamesblack.dev",
            },
            {
            label: "GitHub",
            value: "github.com/James-tech2",
            href: "https://github.com/James-tech2",
            },
        ]
    }
}