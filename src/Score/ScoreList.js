import React, { useState } from 'react'
import axios from 'axios'


export default function ScoreList() {

    const [display, setDisplay] = useState(false)
    const [scoreList, setScoreList] = useState([])

    const toggle = () => {
        setDisplay(display => !display)
    }

    const handleClick = () => {
        axios.get("http://localhost:8080/UserService/getAll")
            .then(res => {
                console.log(res.data)
                setScoreList(res.data)
            })
        toggle()
        console.log(scoreList)
    }


    return (
        <div className="container">
            <button className='btn btn-primary' onClick={handleClick}>Display scores</button>
            {display && (
                scoreList.map((user, index) => (

                    <li key={index}>
                        <span>{user.name} : {user.score}</span>
                    </li>
                ))
            )}

        </div>
    )
}
