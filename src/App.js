import { Box } from "@chakra-ui/react";
import "./App.css";
import HomePage from "./pages/home";
import { Provider } from "react-redux";
import store from "./store/index";
function App() {
  return (
    <Provider store={store}>
      <Box>
        <HomePage />
      </Box>
    </Provider>
  );
}

export default App;
