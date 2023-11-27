import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import Typography from "@mui/material/Typography";

import { useColorScheme } from "@mui/material/styles";

// CSR, SSR

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
        // localStorage.setItem('trello-dark-light-mode')
        // localStorage.getItem('trello-dark-light-mode')
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
  return (
    <>
      <ModeToggle />
      <hr />
      <div>Yushing Dev</div>
      <Typography variant="body2" color="text.secondary">
        Test Typography
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  );
}

export default App;
