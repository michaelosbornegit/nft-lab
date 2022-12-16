import { Paper, Typography } from "@mui/material"
import React from "react";
import NavBar from "../features/NavBar";
import SendMessage from "../features/SendMessage";

const Home = (): JSX.Element => {

  return (
    <>
      <Paper sx={{ padding: '50px' }}>
        <Typography variant="h2">
          Welcome to NFT Lab
        </Typography>
        <SendMessage />
      </Paper>
    </>
  )
}

export default Home;