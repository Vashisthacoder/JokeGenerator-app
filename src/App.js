import React, {useEffect,useState} from 'react'
import './App.css';



function App() {

    const [joke, setJoke] = useState([])

    useEffect(() => {

        const fetchjoke =async()=>
        await fetch(`https://api.icndb.com/jokes/random`)
        .then (response=>response.json())
        .then(data=>{

            console.log(data.value)
            setJoke(data.value.joke)


        })



        fetchjoke()
       
    }, [])


    return (

     

        <div>

         <h1 id='generator' >Joke Generator</h1>

       <h1 id="joke">{joke}</h1 >
     
            
        </div>
    )
}

export default App

