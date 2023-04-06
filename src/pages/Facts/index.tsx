import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getFacts } from "../../services";
import {
  setFacts,
  setIsLoading,
} from "../../store/actionCreators/factsActions";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Routes } from "../../constants/Routers";
import { Fact } from "./styles";

export const Facts = () => {

  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFacts = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`https://cat-fact.herokuapp.com/facts`);
      console.log(data);
      setFacts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);

const filterFacts = (id: any) => {
	 const data = facts.filter((fact: any) => fact.createdAt !== id);
	 setFacts(data);
}

  return (
    <>
      <Link to={Routes.HOME}>
        <Button variant="contained">Back to Home</Button>
      </Link>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        facts.map((fact: any) => (
          <Fact key={fact.createdAt}>
            <div>
              <div>{fact.text}</div>
              <div>{fact.createdAt}</div>
            </div>
            <button onClick={() => filterFacts(fact.createdAt)}>delete</button>
          </Fact>
        ))
      )}
    </>
  );
};
