import React,{useState} from 'react'




const initialState = [
    {
        name: "Proyecto 1",
        description: "Este es el primer Proyecto"
    }
]


const useInitialState = () => {

    const [state, setState] = useState(initialState)

    const [hamMenu, setHamMenu] = useState(false)

    const handleMenu = () => {
        setHamMenu(!hamMenu)
        console.log(hamMenu)
    }





  return {state, hamMenu, handleMenu}
}

export default useInitialState