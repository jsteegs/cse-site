# Website for CSE@CSUSB Club

Git project for the CSE@CSUSB website (https://csusb.dev)

## Env File

For local development copy [.env.sample](.env.sample) to .env and make any necessary edits before running! If deploying with Netlify, then fill in variables on Netlify's environment variable page before pushing.

### Google Calendar Integration

For the Google Calendar integration to work, you must:
1. Create a Google Calendar that you would like to have displayed on the "Calendar" page.
2. Use the Google Cloud console (https://console.cloud.google.com/) to create a project.
3. In that project, enable the Google Calendar API.
4. Create an API key under the "Credentials" page and set the scope to the Google Calendar API.
5. Fill in the Google Calendar API Key and Google Calendar URL variables in your .env file (or your Netlify config!!).

### Credits

* CSE@CSUSB Club officers
* Original Site Developed by [Carson Weeks](https://github.com/tiviCheatCodeSame) for 2022-2023, as well as support for 2023-2024.
* Further Developed and Maintained by [Zoey Becker](https://github.com/foundationkitty) for 2023-2024.

Made with Astro: https://github.com/withastro/astro
