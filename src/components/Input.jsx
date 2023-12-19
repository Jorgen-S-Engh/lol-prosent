import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { useState } from "react";

function Input() {
  const [answer, setAnswer] = useState("nothing");
  const [partOfNumber, setPartOfNumber] = useState(0);
  const [wholeNumber, setWholeNumber] = useState(0);

  function calculate(e) {
    setAnswer((partOfNumber / wholeNumber) * 100);
    console.log(answer);
  }

  return (
    <Paper
      sx={{
        padding: "40px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: "15px",
        }}
      >
        Regn ut prosenten
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              type="number"
              label="Del av tallet"
              onChange={(e) => setPartOfNumber(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              type="number"
              label="Det hele tallet"
              onChange={(e) => setWholeNumber(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
        <Button onClick={calculate}>Regn ut</Button>
      </Box>
      <Typography>Prosenten er: {answer}</Typography>
    </Paper>
  );
}

export default Input;
