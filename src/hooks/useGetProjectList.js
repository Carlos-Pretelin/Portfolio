import React, {useState} from "react"



//This is the Hardcoded List of Projects that could be replaced with an API call

const ProjectList = [
    

    {
        name: "React Calculator",
        id: 1,
        year: 2022,
        tech: ["HTML/CSS", "Javascript", "React", ],
        description: "Developed a calculator application using React.js with a high level of complexity managing several states using the useReducer Hook, also keeping in mind a very modern and friendly user interface.",
        img: "../assets/Works/ReactCalc.png",
        url:"https://react-calculator-carlos-pretln-123cc7.netlify.app/?fbclid=IwAR0twBMttaFxi2yCMRIvAQMifIYljE437Ao2GaXO_fS87XDpdnAAVXFluQc",
        github: "https://github.com/Carlos-Pretelin/Simpl-Calculator-React",

    },

    {
        name: "E-Comerce App",
        id: 2,
        year: 2022,
        tech: ["HTML/CSS", "Javascript", "React", ],
        description: "Web application that allows users to browse, and purchase products online, Users can browse the product catalog and add items to their cart, and before proceeding to the checkout process",
        img: "../assets/Works/ecomerce.png",
        url:"https://platzi-e-store-d95e4b.netlify.app/?fbclid=IwAR1iaAQvrLsvu5hZMQtDeVdco2rFbE3L1FIvkgW7QqhOdRoxwSW5351PAqQ",
        github: "https://github.com/Carlos-Pretelin/Rickmorty2",
    },

    {
        name: "To-Do App",
        id: 3,
        year: 2022,
        tech: ["HTML/CSS", "Javascript", "React", ],
        description: "Developed a very intuitive to-do list application using the useReducer Hook managing the states of various DOM elements.",
        img: "../assets/Works/ecomerce.png",
        url:"https://to-do-application-carlospretelin-3635.netlify.app/",
        github: "https://github.com/Carlos-Pretelin/Simple-Todo-App",
    },
    {
        name: "Rick and Morty App",
        id: 4,
        year: 2022,
        tech: ["HTML/CSS", "Javascript", "React", ],
        description: "A React app that uses an API and custom hooks and is able to handle a theme change to a dark mode is a web application that allows users to interact with data and functionality provided by a back-end API.",
        img: "../assets/Works/ReactCalc.png",
        url:"https://rick-morty-api-2c2a89.netlify.app/",
        github: "https://github.com/Carlos-Pretelin/Rickmorty2",
    },

    {
        name: "Platzi Conf Shop",
        id: 5,
        year: 2022,
        tech: ["HTML/CSS", "Javascript", "React", ],
        description: "An ecommerce React app that uses an API, custom hooks, and React Router provides a powerful and user-friendly platform for businesses to manage their online sales, while also allowing developers to easily reuse code and manage the different routes and pages within the app.",
        img: "../assets/Works/ReactCalc.png",
        url:"https://react-calculator-carlos-pretln-123cc7.netlify.app/?fbclid=IwAR0twBMttaFxi2yCMRIvAQMifIYljE437Ao2GaXO_fS87XDpdnAAVXFluQc",
        github: "https://github.com/Carlos-Pretelin/Platzi-Conf",
    },
]

const useGetProjectList = () => {

    const [projectList, setProjectList] = useState(ProjectList);

    const [projectDetails, setProjectDetails] = useState();

    const handleDetails = (product) =>{
        setProjectDetails(product)
        console.log("Este Log es desde el hook")
        console.log(product)
    }

  return {projectList, projectDetails, handleDetails}
}

export default useGetProjectList