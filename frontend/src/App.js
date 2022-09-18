import React, {useEffect, useState} from "react"
import axios from "axios";
import Lunch from "./Lunch";
//import Lunch from "./Page/Lunch";

function App() {
    const [token, setToken] = useState('');
    const [lunchs, setLunchs] = useState('');

    const getToken = async () => {
      
    }

    const getLunchs  = async () => {
      
    }


    useEffect(()=>{
      getToken();
    }, [])

    return (
        <div>
            <button onClick={getLunchs}>뭐 먹었게요?</button>

            <Lunch lunchs={lunchs}/>
        </div>
    )
}

export default App;
