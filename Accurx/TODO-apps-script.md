# Google Apps Script Integration TODO

## Completed Tasks
- [x] Write Google Apps Script code for doPost function (created google-apps-script.gs)

## Pending Tasks
- [ ] Set up Google Sheet for data storage
  - Create a new Google Sheet
  - Add headers: Timestamp, Name, Email, Message
  - Get the Sheet ID from the URL
- [ ] Deploy the script as a web app
  - Go to Google Apps Script editor
  - Copy the code from google-apps-script.gs
  - Save the script
  - Deploy as web app with "Execute as: Me", "Who has access: Anyone"
  - Copy the deployment URL
- [ ] Update the URL in config.js if needed
  - Replace the GOOGLE_APPS_SCRIPT_URL with the new deployment URL
- [ ] Test the integration with the Vue form
  - Submit the form from the Vue app
  - Verify data is stored in the Google Sheet
  - Check for any CORS or other errors

## Instructions
1. Create a new Google Sheet at sheets.google.com
2. Add headers in row 1: Timestamp, Name, Email, Message
3. Copy the Sheet ID from the URL (between /d/ and /edit)
4. Go to script.google.com and create a new project
5. Copy the code from Accurx/google-apps-script.gs into the script editor
6. Replace 'YOUR_GOOGLE_SHEET_ID_HERE' with your actual Sheet ID
7. Save the script
8. Click Deploy > New deployment
9. Select type: Web app
10. Execute as: Me, Who has access: Anyone
11. Deploy and copy the URL
12. Update Accurx/src/config.js with the new URL
13. Test the form submission
