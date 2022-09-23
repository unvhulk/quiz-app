import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import {
	AuthProvider,
	CategoryProvider,
	QuestionProvider,
	ThemeProvider,
} from "./contexts";

makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<AuthProvider>
					<CategoryProvider>
						<QuestionProvider>
							<App />
						</QuestionProvider>
					</CategoryProvider>
				</AuthProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
