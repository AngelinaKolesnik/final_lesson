import React from "react";
import { MainContainer } from "./styles";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routers";

export const Main = () => {
  return (
    <MainContainer>
      <Link to={Routes.FACTS}>
        <Button variant="contained">Click to get facts</Button>
      </Link>
    </MainContainer>
  );
};
