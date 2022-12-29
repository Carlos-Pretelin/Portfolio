import React,{useState} from 'react'
import Calc from "../assets/Works/ReactCalc.png"
import ecomerce from "../assets/Works/ecomerce.png"




const initialState = [
    {
        name: "React Calculator",
        id: 1,
        description: "Developed a calculator application using React.js with a high level of complexity managing several states using the useReducer Hook, also keeping in mind a very modern and friendly user interface.",
        img: "../assets/Works/ReactCalc.png",
        url:"https://react-calculator-carlos-pretln-123cc7.netlify.app/?fbclid=IwAR0twBMttaFxi2yCMRIvAQMifIYljE437Ao2GaXO_fS87XDpdnAAVXFluQc"
    },

    {
        name: "E-Comerce App",
        id: 2,
        description: "Web application that allows users to browse, and purchase products online, Users can browse the product catalog and add items to their cart, and before proceeding to the checkout process",
        img: "../assets/Works/ecomerce.png",
        url:"https://platzi-e-store-d95e4b.netlify.app/?fbclid=IwAR1iaAQvrLsvu5hZMQtDeVdco2rFbE3L1FIvkgW7QqhOdRoxwSW5351PAqQ"
    },

    {
        name: "To-Do App",
        id: 3,
        description: "Developed a very intuitive to-do list application using the useReducer Hook managing the states of various DOM elements. Taking advantage of a custom hook that allows me to keep track of the to-dos the user creates, even if they refresh the page or create other elements in other browser tabs using the Local Storage of said browser.",
        img: "../assets/Works/ecomerce.png",
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





  return {state, hamMenu, handleMenu}
}

export default useInitialState