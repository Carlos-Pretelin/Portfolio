import React,{useState} from 'react'




const initialState = [
    {
        name: "React Calculator",
        id: 1,
        year: 2022,
        tech: ["HTML/CSS", "Javascript", "React", ],
        description: "Developed a calculator application using React.js with a high level of complexity managing several states using the useReducer Hook, also keeping in mind a very modern and friendly user interface.",
        url:"https://react-calculator-carlos-pretln-123cc7.netlify.app/?fbclid=IwAR0twBMttaFxi2yCMRIvAQMifIYljE437Ao2GaXO_fS87XDpdnAAVXFluQc",
        github: "https://github.com/Carlos-Pretelin/Simpl-Calculator-React",
    },

    {
        name: "E-Comerce App",
        id: 2,
        year: 2022,
        tech: ["HTML/CSS", "Javascript", "React", ],
        description: "Web application that allows users to browse, and purchase products online, Users can browse the product catalog and add items to their cart, and before proceeding to the checkout process",
        url:"https://platzi-e-store-d95e4b.netlify.app/?fbclid=IwAR1iaAQvrLsvu5hZMQtDeVdco2rFbE3L1FIvkgW7QqhOdRoxwSW5351PAqQ",
        github: "https://github.com/Carlos-Pretelin/Online-Store-Platzi",
    },

    {
        name: "To-Do App",
        id: 3,
        year: 2022,
        tech: ["HTML/CSS", "Javascript", "React", ],
        description: "Developed an intuitive to-do list application using the useReducer Hook managing the states of various DOM elements.",
        url:"https://to-do-application-carlospretelin-3635.netlify.app/",
        github: "https://github.com/Carlos-Pretelin/Simple-Todo-App",
    }
]


const employmentInitalState = [
    {
        title: "Frontend Developer at Wenufy",
        id: 1,
        date: "Nov, 2021 - Nov, 2022",
        description: "Development of a Web App called Wenufy that connects you to multiple local businesses to access their products or services.",
    },

    {
        title: "Frontend Developer at Farmacia Santa Clara",
        id: 2,
        date: "Apr, 2021 - Oct 2022",
        description: "Development of landing pages for various services, features, and marketing campaigns. Design, help, test and deploy web applications. ",
    },

   
]


const useInitialState = () => {

    const [state, setState] = useState(initialState)

    const [employmentState, setEmploymentState] = useState(employmentInitalState)

    const [hamMenu, setHamMenu] = useState(false)

    const handleMenu = () => {
        setHamMenu(!hamMenu)
        //console.log(hamMenu)
    }





  return {state, hamMenu, employmentState, setEmploymentState, setHamMenu, handleMenu}
}

export default useInitialState