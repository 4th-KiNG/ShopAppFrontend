import axios from "axios";
import WebApp from "@twa-dev/sdk";

export const API = "http://localhost:3000";
export const BOT_TOKEN = "8007690314:AAF797Dw-0AtxhjwCZ6U6OAWDHnwJb57No0";

export const Http = axios.create();

export const tgApp = WebApp;

tgApp.expand();
