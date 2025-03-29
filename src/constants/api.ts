import axios from "axios";
import WebApp from "@twa-dev/sdk";

export const API = "http://localhost:3000";

export const Http = axios.create();

export const tgApp = WebApp;

tgApp.expand();
tgApp.MainButton.setText("Открыть каталог").show();
