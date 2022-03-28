import { config } from "dotenv";
config();

// Paypal
export const PAYPAL_API_CLIENT = 'AZ9S6n3cp1zYlXtFOQSgdSt81pYn5_gC_OYYySuKS95h7YdV2UdfzUXNkC-PJvB3qvWme0wgNL7JiK4F';
export const PAYPAL_API_SECRET = 'EMrktbbQqxiFBSyslZZkTbNzQ5S2jTfqm5p4h3QCZsc1ZWeXGHO8dlZbtuGiu77F0qACvf0Jv8pKglMx';
export const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // url sandbox or live for your app

// Server
export const PORT = process.env.PORT || 5000;
export const HOST =
  process.env.NODE_ENV === "production"
    ? process.env.HOST
    : "http://localhost:" + PORT;
