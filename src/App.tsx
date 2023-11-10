import "./App.css";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { Paper, Box } from "@mui/material";

const size = "250px";

function App() {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti width={width} height={height} />
      <Box height="100%" width="100%" display="flex">
        <Box margin={2}>
          <Paper elevation={6}>
            <Box height={size} width={size} padding={3} margin={3}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={"/public/present1.svg"} />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src={"/public/sf.jpg"}
                      height={"100%"}
                      width={"100%"}
                    />
                  </div>
                </div>
              </div>
            </Box>
          </Paper>
          <Paper elevation={6}>
            <Box height={size} width={size} padding={3} margin={3}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={"/public/present1.svg"} />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src={"/public/free-parking.jpg"}
                      height={"100%"}
                      width={"100%"}
                    />
                  </div>
                </div>
              </div>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default App;
