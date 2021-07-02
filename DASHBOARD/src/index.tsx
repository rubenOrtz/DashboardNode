import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { WebSocketLink } from "apollo-link-ws";

const link = createHttpLink({
  uri: "http://176.9.111.217:3092/graphql",
  credentials: "include",
});
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset />
      <Router>
        <ApolloProvider client={client}>
          <HashRouter>
            <App />
          </HashRouter>
        </ApolloProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
