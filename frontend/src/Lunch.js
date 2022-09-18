import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Lunch = ({lunchs}) => {
    return (
        <div>
            {
                lunchs ? lunchs.map(lunch => {
                    
                }) : null
            }
        </div>
    )
}

export default Lunch