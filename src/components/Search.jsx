import React, { useState } from 'react'
import Answers from './Answers'

const stadiums = [
    'Selhurst Park',
    'Highfield Road',
    'Bramall Lane',
    'Maine Road',
    'City Ground',
    'Elland Road',
    'Ewood Park',
    'White Hart Lane',
    'Portman Road',
    'Anfield',
    'Highbury',
    'The Dell',
    'Stamford Bridge',
    'Villa Park',
    'Hillsborough',
    'Goodison Park',
    'Carrow Road',
    'Loftus Road',
    'Boundary Park',
    'Ayresome Park',
    'Old Trafford',
    "St James' Park",
    'County Ground',
    'Upton Park',
    'Filbert Street',
    'Burnden Park',
    'Riverside',
    'Roker Park',
    'Baseball Ground',
    'Pride Park Stadium',
    'Oakwell Ground',
    'Reebok Stadium',
    'The Valley',
    'Stadium of Light',
    'Vicarage Road',
    'Valley Parade',
    'Craven Cottage',
    "Saint Mary's",
    "St Andrew's Ground",
    'The Hawthorns',
    'Fratton Park',
    'King Power Stadium',
    'Molineux Stadium',
    'Etihad Stadium',
    'DW Stadium',
    'Emirates Stadium',
    'Madejski Stadium',
    'bet365 Stadium',
    'KCOM Stadium',
    'Turf Moor',
    'Bloomfield Road',
    'Liberty Stadium',
    'Cardiff City Stadium',
    'Vitality Stadium',
    'London Stadium',
    'John Smith’s Stadium',
    'Wembley Stadium',
    'Amex Stadium',
    'Tottenham Hotspur Stadium',
    'Brentford Community Stadium',
    'Kenilworth Road'
  ]
  

const teams = [
    'Blackburn Rovers',
    'Middlesbrough FC',
    'Manchester United',
    'Queens Park Rangers',
    'Liverpool FC',
    'Wimbledon FC',
    'Manchester City',
    'Crystal Palace',
    'Arsenal FC',
    'Aston Villa',
    'Sheffield United',
    'Norwich City',
    'Tottenham Hotspur',
    'Oldham Athletic',
    'Leeds United',
    'Nottingham Forest',
    'Sheffield Wednesday',
    'Chelsea FC',
    'Southampton FC',
    'Coventry City',
    'Everton FC',
    'Ipswich Town',
    'Swindon Town',
    'West Ham United',
    'Newcastle United',
    'Leicester City',
    'Bolton Wanderers',
    'Sunderland AFC',
    'Derby County',
    'Barnsley FC',
    'Charlton Athletic',
    'Watford FC',
    'Bradford City',
    'Fulham FC',
    'West Bromwich Albion',
    'Birmingham City',
    'Wolverhampton Wanderers',
    'Portsmouth FC',
    'Wigan Athletic',
    'Reading FC',
    'Stoke City',
    'Hull City',
    'Burnley FC',
    'Blackpool FC',
    'Swansea City',
    'Cardiff City',
    'AFC Bournemouth',
    'Huddersfield Town',
    'Brighton & Hove Albion',
    'Brentford FC',
    'Luton Town'
  ]


export default function Search() {
    const [data, setData]= useState(null)

    async function search(){
        const team = document.getElementById("team").value
        const stadium = document.getElementById("stadium").value
        const response = await fetch(`https://calm-jade-cygnet-wear.cyclic.app/answer/${team}/${stadium}`)
        const actualData = await response.json()
        setData(actualData)   
    }
  return (
    <div className='container'>
    <div className='search'>
        <label htmlFor="team">Team:</label>
        <select name="team" id="team">
            <option value="">Please Select</option>
            {teams.sort().map((team) => {
                return(
                    <option key={team} value={team}>{team}</option>
                )
            })}
        </select>
        <label htmlFor="stadium">Stadium:</label>
        <select name="stadium" id="stadium">
            <option value="">Please Select</option>
        {stadiums.sort().map((stadium) => {
                return(
                    <option key={stadium} value={stadium}>{stadium}</option>
                )
            })}
        </select>
    </div>
        <button onClick={search}>Solve</button>
        <Answers data={data}/>
    </div>

  )
}
