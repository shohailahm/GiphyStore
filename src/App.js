import "./App.css";
import Header from "./Components/Header";
import ThemeContextProvider from "./Context/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/index";
import { ApolloProvider } from "@apollo/client";
import client from "./appollo/client";

function App() {
  return (
    <div className="App bg-white dark:bg-black transition-all dark:text-white">
      <BrowserRouter>
        <ApolloProvider client={client}>
          <ThemeContextProvider>
            <Header />
            <Routes>
              {routes.map((route) => {
                return <Route key={route.path} {...route} />;
              })}
            </Routes>
          </ThemeContextProvider>
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
