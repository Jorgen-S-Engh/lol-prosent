import React from "react";
import {
  Typography,
  Box,
  Switch,
  FormGroup,
  FormControlLabel,
  Paper,
} from "@mui/material";

function Header() {
  return (
    <Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h3" component="h1">
          Lol prosent
        </Typography>
        <Box
          sx={{
            margin: "0px 15px",
          }}
        >
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked size="small" />}
              label="Dark Mode"
            />
            <FormControlLabel
              control={<Switch defaultChecked size="small" />}
              label="True Dark Mode"
            />
          </FormGroup>
        </Box>
      </Box>
    </Paper>
  );
}

export default Header;
