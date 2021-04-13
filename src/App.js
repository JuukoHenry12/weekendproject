import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./pages/Create";
import Note from "./pages/Note";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import Layout from './componets/Layout'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightBold: 700,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightLight: 400,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Layout>
      <Switch>
          <Route exact path="/" component={Note} />
          <Route path="/create" component={Create} />
        </Switch>
      </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
