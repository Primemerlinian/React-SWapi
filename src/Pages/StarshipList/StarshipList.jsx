import { useEffect, useState } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";
                

const StarshipList = () => {
  const [starshipList, setAllStarships] = useState([]);

  useEffect(() => {
    const fetchAllStarships = async () => {
      const starshipData = await getAllStarships();
      setAllStarships(starshipData.results);
    };
    fetchAllStarships();
  }, []);

  return (
    <>
      <div class='starshiplistheader'>
        <h1>Starship List </h1>
      </div>
      {starshipList.length ? (
        <>
          {starshipList.map((starship) => (
            <div class='starshiplist'>
              <Link to="/starships" key={starship.name} state={{ starship }}>
                {starship.name}
              </Link>
            </div>
          ))}
        </>
      ) : (
        <>
          <h4>Loading Starships...</h4>
        </>
      )}
    </>
  );
};

export default StarshipList;
