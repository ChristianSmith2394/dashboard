import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssBaseline />
      <div className="app">
        <ThemeProvider theme={theme}>
          <main className="content">
            <TopBar />
          </main>
        </ThemeProvider>
      </div>
    </ColorModeContext.Provider>
  );
}

export default App;
