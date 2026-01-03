# SlackBot Leave App

Slack slash-command webhook that logs leave requests into a Google Sheet.

## Highlights
- Parses `from/to/reason` fields from a single command.
- Appends structured rows to `Leave Log`.
- Simple Apps Script Web App deployment.

## Tech
Apps Script, Slack, Google Sheets

## Setup
1. Open the target Google Sheet and go to Extensions -> Apps Script.
2. Paste `leave_sheet_appscript.js` into the project.
3. Deploy as a Web App (execute as you, access: anyone with the link).
4. Create a Slack slash command that POSTs to the Web App URL.

## Usage
- Format: `/apply-leave from [DD/MM/YYYY HH:MM] to [DD/MM/YYYY HH:MM] reason [Text]`
- The script appends a row with user, dates, and reason.

## Notes
- Adjust the sheet name if your log tab is different.
