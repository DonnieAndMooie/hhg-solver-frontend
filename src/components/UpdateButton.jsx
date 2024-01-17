import React, { useState } from 'react'

export default function UpdateButton() {
    const [clicked, setClicked] = useState(false)
    const [hide, setHide] = useState(false)


    async function clickHandler(){
        setClicked(true)
        await fetch(`https://calm-jade-cygnet-wear.cyclic.app/update`)
    }

    if (hide){
        return(
            <div></div>
        )
    }

    if (clicked){
        setTimeout(() => {
            setHide(true)
        }, 3000);
        return(
            <div className='button-container'>Databsase Updated!</div>
        )
    }
  return (
    <div className="button-container">
        <button className='update' onClick={() => clickHandler()}>Update Database</button>
    </div>
    
  )
}
