import React, {useEffect, useState} from "react"
import axios from "axios";
import Lunch from "./Lunch";
//import Lunch from "./Page/Lunch";

function App() {
    const [token, setToken] = useState('');
    const [lunchs, setLunchs] = useState('');

    const getToken = async () => {
      // 1. django에서 createsuperuser로 생성한 username과 password를 이용해 토큰 받아오기
    }

    const getLunchs  = async () => {
      // 2. 오늘 먹은 점심 메뉴 받아오기
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
