///////////////
How to create a google form that allows data to be sent to it via js (latest with new google form setting)

1. Create a new google form 

2. Take note of the '1Y05Rb91j-TVG3pxw34cpObz_fYSOk8RHrgcNXtVKrY0' in the url link 'https://docs.google.com/forms/d/1Y05Rb91j-TVG3pxw34cpObz_fYSOk8RHrgcNXtVKrY0/edit'

3. Once you are done with creating the form, Click 'Preview' icon on the top right side (the eye icon)

4. Take note of the url link for the preview page 'https://docs.google.com/forms/d/e/1FAIpQLSeeSnx6zu19WHt6HZT0j4a321LQ80ahidHDlUXfaoMuF6QF0g/viewform'

5. Back at the edit form page, click 'RESPONSES' tab, and click on the spreadsheet icon to create a spreadsheet

6. Click to create a new spreadsheet

7. Take note of the url link of the spreadsheet 'https://docs.google.com/spreadsheets/d/1CuscI1ZXRR6Fl4ZcXXGqSyrxPhJNEHMW9F1aiBtlras/edit#gid=1355000109'

8. Go to File > Publish to the web > click 'Publish'

9. Go back to the viewform page 'https://docs.google.com/forms/d/e/1FAIpQLSeeSnx6zu19WHt6HZT0j4a321LQ80ahidHDlUXfaoMuF6QF0g/viewform' -> go to view -> developer -> view source, search for 'entry'

10. you wil find the entry id that corresponds to the questions you have created in your google form, for e.g latitude = 'entry.1667023554', this is the id that you will use to POST your value to 

11. Change the entry number from 'entry.1667023554' to 'entry_1667023554'

///////////////
