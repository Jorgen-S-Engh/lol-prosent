import Input from "./components/Input";
import { Box } from "@mui/material";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Input />
      </Box>
    </>
  );
}

export default App;
