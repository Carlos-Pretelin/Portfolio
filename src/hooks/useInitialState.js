import React,{useState} from 'react'




const initialState = [
    {
        name: "React Calculator",
        id: 1,
        year: 2022,
        tech: ["HTML/CSS", "Javascript", "React", ],
        description: "Developed a calculator application using React.js with a high level of complexity managing several states using the useReducer Hook, also keeping in mind a very modern and friendly user interface.",
        url:"https://react-calculator-carlos-pretln-123cc7.netlify.app/?fbclid=IwAR0twBMttaFxi2yCMRIvAQMifIYljE437Ao2GaXO_fS87XDpdnAAVXFluQc"
    },

    {
        name: "E-Comerce App",
        id: 2,
        year: 2022,
        tech: ["HTML/CSS", "Javascript", "React", ],
        description: "Web application that allows users to browse, and purchase products online, Users can browse the product catalog and add items to their cart, and before proceeding to the checkout process",
        url:"https://platzi-e-store-d95e4b.netlify.app/?fbclid=IwAR1iaAQvrLsvu5hZMQtDeVdco2rFbE3L1FIvkgW7QqhOdRoxwSW5351PAqQ"
    },

    {
        name: "To-Do App",
        id: 3,
        year: 2022,
        tech: ["HTML/CSS", "Javascript", "React", ],
        description: "Developed a very intuitive to-do list application using the useReducer Hook managing the states of various DOM elements.",
        url:"https://to-do-application-carlospretelin-3635.netlify.app/"
    }
]


const useInitialState = () => {

    const [state, setState] = useState(initialState)

    const [hamMenu, setHamMenu] = useState(false)

    const handleMenu = () => {
        setHamMenu(!hamMenu)
        //console.log(hamMenu)
    }





  return {state, hamMenu, setHamMenu, handleMenu}
}

export default useInitialState