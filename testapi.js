import OtterApi from 'otter.ai-api';

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


const otterApi = new OtterApi.default({
  email: process.env['EMAIL'], // otter.ai email
  password: process.env['PASSWORD'], // otter.ai password
});

await otterApi.init() // Performs login
