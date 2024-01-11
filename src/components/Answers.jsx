import React from 'react'

export default function Answers({data}) {
    if (data === null){
        return
    }
  
    else if (data.length === 0){
        return(
            <div className='no-solutions'>There are no solutions.</div>
        )
    }
  else{
    return(
        <div>
            {data.map((match, i) => {
                return(
                    <div className='match' key={i}>
                        <span className='season'>{match.season}</span>
                        <span className="scorleine">
                        {match.homeTeam} <span className='score'>{match.score}</span> {match.awayTeam}
                        </span>
                        
                        {match.awayGoalScorers.length > 0 ? <p>Away Goalscorers:</p> : ""}
                        
                        {match.awayGoalScorers.map((scorer, i) => {
                            return(
                                <div key={`scorer${i}`}>{scorer.name} {scorer.minute}</div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
  }
}
