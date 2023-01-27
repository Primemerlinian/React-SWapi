import { useEffect, useState } from "react"
import { getAllStarships } from "../../services/sw-api"
import { Link } from 'react-router-dom'


const StarshipList = () => {
  const [ starshipList, setAllStarships ] = useState([])

  useEffect(() => {
    const fetchAllStarships = async () => {
      const starshipData = await getAllStarships()
      setAllStarships(starshipData.results)
    }
    fetchAllStarships()
  }, [])

  return(
    <>
    <div>
      <h1>Starship List (Nice!!)</h1>
      </div>
      {starshipList.length ?
        <>
          {starshipList.map(starship =>
              <Link to='/starships' key={starship.name} state={{starship}}>{starship.name} 
              </Link>
          )}
        </>
        :
        <>
          <h4>Loading Starships...</h4>
        </>
      }
    </>
  )
}

export default StarshipList