import axios from "axios";
import WebApp from "@twa-dev/sdk";

export const API = "http://localhost:3000";
export const STORAGE = `${API}/storage`;

export const Http = axios.create();

export const tgApp = WebApp;
