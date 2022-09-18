import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Lunch = ({lunchs}) => {
    return (
        <div>
            {
                lunchs ? lunchs.map(lunch => {
                    // 3. 받아온 점심 데이터 렌더링하기
                }) : null
            }
        </div>
    )
}

export default Lunch