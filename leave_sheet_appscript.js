function doPost(e) {
    if (typeof e !== 'undefined') {
        var ss = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = ss.getSheetByName('Leave Log');
        var lastRow = sheet.getLastRow();


        // extract the relevant data
        var parameter = e.parameter;
        var teamDomain = parameter.team_domain;
        var channelName = parameter.channel_name;
        var userName = parameter.user_name;
        var date = new Date().toLocaleString();
        var updateText = parameter.text;
        var splitText = updateText.toLowerCase().split(" ")
        keywords = ["from", "to", "reason"]
        var stored_index = []

        splitText.forEach((element, index) => {
            keywords.forEach((chi_element, chi_index) => {
                if (chi_element == element && stored_index.length < 4) {
                    console.log(chi_element, index)
                    stored_index.push({ key: chi_element, value: index })
                }
            });
        });

        if (stored_index.length !== 3) {
            return ContentService.createTextOutput(':exclamation: Please check your input! Format: /apply-leave from [Date & Time (DD/MM/YYYY HH:MM)] to [Date & Time (DD/MM/YYYY HH:MM)] reason [Text]');
        } else {
            var fromDate = splitText.slice(stored_index[0].value + 1, stored_index[1].value).toString()
            var toDate = splitText.slice(stored_index[1].value + 1, stored_index[2].value).toString()
            var reason = splitText.slice(stored_index[2].value + 1).join(" ")
            var slackDetails = [userName, date, teamDomain, channelName, fromDate, toDate, reason];
            sheet.getRange(lastRow + 1, 1, 1, 7).setValues([slackDetails]);

        }

    }
    return ContentService.createTextOutput(':books::thumbsup: Thank you for your Update! Application Recieved :tada:');
}

