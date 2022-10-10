import OtterApi from "/Users/avery.chan/Desktop/otter.ai-api/src/index.js";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const otterApi = new OtterApi({
  email: process.env["EMAIL"], // otter.ai email
  password: process.env["PASSWORD"], // otter.ai password
});

await otterApi.init(); // Performs login

const UNIX_time = Date.now();

const numHoursBefore = 96;
const numMillisecondsBefore = numHoursBefore * 60 * 60 * 1000;

const query = "";
const begin_date = UNIX_time - numMillisecondsBefore;
const speeches = (await otterApi.advancedSpeechSearch(query, begin_date)) || [];
console.log({ "speeches.length": speeches.length });
