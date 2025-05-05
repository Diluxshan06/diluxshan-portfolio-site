import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";


const skills = [
    {
        skill:'HTML',
        icon:<FaHtml5 />,
    },
    {
        skill:'CSS',
        icon:<FaCss3Alt />
    },
    {
        skill:'ReactJS',
        icon:<FaReact />
    },
    {
        skill:'TailwindCSS',
        icon:<RiTailwindCssFill />
    },
    {
        skill:'Django',
        icon:<SiDjango />
    },
    {
        skill:'Spring Boot',
        icon:<SiSpringboot />
    },
    {
        skill:'PostgreSQL',
        icon:<BiLogoPostgresql />
    },
    {
        skill:'MySQL',
        icon:<GrMysql />
    }
]

export default skills;