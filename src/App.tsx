import "./App.css";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { Paper, Box } from "@mui/material";
import Present1 from "./present1.svg";
import Present3 from "./present3.svg";
import sf from "./sf.jpg";
import freeParking from "./free-parking.jpg";

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
                    <img src={Present1} />
                  </div>
                  <div className="flip-card-back">
                    <img src={sf} height={"100%"} width={"100%"} />
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
                    <img src={Present3} />
                  </div>
                  <div className="flip-card-back">
                    <img src={freeParking} height={"100%"} width={"100%"} />
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
