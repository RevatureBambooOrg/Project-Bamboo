import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN,  REDIRECT_URI} from '../Storage.json';

const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});

const filePath = path.join(__dirname, 'assets/cards.json');

async function uploadFile() 
{
  try 
  {
    const response = await drive.files.get({
      //q: "mimeType='application/json'",
      mimeType: 'text/*',
      name: "HelloTesterFile.txt"
    })

    console.log("Response: " + response);

    // const response = await drive.files.create({
    //     requestBody: {
    //         name: 'HelloTesterFile.txt',
    //         mimeType: 'text/*'
    //     },
    //     media: {
    //         mimeType: 'text/*',
    //         body: fs.createReadStream(filePath)
    //     }
    // })

    console.log("Response Data: " + response.data);
  }
  catch (error)
  {
      let errorMessage = "Try-Catch in create component with strange behavior";
      if(error instanceof Error)
      {
        errorMessage = error.message;
      }
      console.log(errorMessage);
  }
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class functionList 
{
  public runCreateFunction
}
