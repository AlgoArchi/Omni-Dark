import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./theme/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.querySelector("#root")
);
