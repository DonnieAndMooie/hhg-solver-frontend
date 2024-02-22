import React, { useState } from 'react'
import axios from 'axios'
const cheerio = require("cheerio")

export default function UpdateButton() {
    const [clicked, setClicked] = useState(false)
    const [hide, setHide] = useState(false)


    async function clickHandler(){
        setClicked(true)
        // const response = await fetch(`https://calm-jade-cygnet-wear.cyclic.app/update`)
        // const data = await response.json()
        // console.log(data)

  const url = "https://www.worldfootball.net/all_matches/eng-premier-league-2023-2024/"
  const season = "2023/24"

  await fetchSeasonData(url, season)


  async function fetchSeasonData(url, season){
    await axios(url)
    .then(async (response) => {
        const allMatches = []
        const html = response.data
        const $ = cheerio.load(html)
         $(".standard_tabelle").find("a").each(async function(){
            const text = $(this).text()
            if (text.length === 10 && text[text.length - 2] === ")"){
                const href = $(this).attr("href")
                const matchURL = `https://www.worldfootball.net${href}`
                const matchData = fetchMatchData(matchURL, season)
                //console.log(matchData)
                allMatches.push(matchData)
            }
        })
        return allMatches
  
    })
    .then(async (response) => {
        const data =  await Promise.all(response)
        //console.log(data)
        console.log(data)
    })
  }
  
  
  async function fetchMatchData(url, season){
    const matchData = {season}
    await axios(url)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            const teams = $("[width=35%]").each(function(i){
                const team = $(this).text().trim()
                if (i === 0){
                    matchData.homeTeam = team
                } else{
                    matchData.awayTeam = team
                }
            })
            const score = $(".resultat").text().trim()
            matchData.score = score
            const stadium = $("[href^=/venues]").text().slice(8)
            matchData.stadium = stadium
            matchData.awayGoalScorers = []
            const awayGoalScorers = $("td[style='padding-left: 50px;']").each(function(){
                const scorerData = $(this).text()
                const words = scorerData.slice(1).split(" ")
                let name = ""
                let minute
                for (const word of words){
                    if (word.match(/^\d/)) {
                        minute = word.replace(".", "'")
                        name = name.slice(0, -1)
                        break
                     }
                     else{
                        name += word + " "
                     }
                }
                matchData.awayGoalScorers.push({
                    name,
                    minute
                })
            })
           // console.log(matchData)
            return matchData
        })
        return matchData
  }
  
  
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
