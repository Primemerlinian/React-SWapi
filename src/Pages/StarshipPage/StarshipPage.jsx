import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getStarshipPage } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipPage = () => {
  const [starshipPage, setStarshipPage] = useState({});
  const location = useLocation();

  useEffect(() => {
    const fetchStarshipPage = async () => {
      const starshipData = await getStarshipPage(location.state.starship.url);
      setStarshipPage(starshipData);
    };
    fetchStarshipPage();
  }, [location.state.starship.url]);

  return (
    <>
      <div className="starship-page-container">
        {getStarshipPage.name ? (
          <>
            <h2>Name:{starshipPage.name}</h2>
            <h2>Model:{starshipPage.model}</h2>
            <Link to="/">
              <p>Return</p>
            </Link>
          </>
        ) : (
          <>
            <p>Loading Starship details...</p>
          </>
        )}
      </div>
    </>
  );
};

export default StarshipPage;
