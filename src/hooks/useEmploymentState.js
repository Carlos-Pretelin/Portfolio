import React,{useState} from 'react'




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
    


const useEmploymentState = () => {

    const [employmentState, setEmploymentState] = useState(employmentInitalState)
    

  return {employmentState,}
}

export default useEmploymentState