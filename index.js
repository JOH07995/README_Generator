const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    //ask user for name of the app 
    {
      
        type: 'input',
        name: 'repoName',
        message: 'What is the name of your application? (This will be the main header of your README)',
     
    },
    //asks user for github username 
    {
        type: 'input',
        name: 'gitHubName',
        message: 'What is your username on Github?',
     
    },
    // asks for a description of the project 
    {
        type: 'input',
        message: 'Write a description of your application',
        name: 'description',
     
    },
    // How do you install your app? 
    {
        type: 'input',
        message: 'How does a user install your application? Provide instuctions here',
        name: 'installApp',
     
    },
   // How does a user use your application? 
    {
        type: 'input',
        message: 'How does a user use your application? Provide instuctions here',
        name: 'appInstructions',
     
    },
    // How would a user of this application report an issue, or make a contribution to it? 
    {
        type: 'input',
        message: 'Would you like you users to be able to report issues or contribute to this project? add instructions here.',
        name: 'appIssuesAndCont',
     
    },
    // prompts what license user would like to use 
    {
        type: 'input',
        message: 'What license would you like to use? (Ex: MIT, GPL 3.0) If you do not wish to use a license type "none"',
        name: 'license',
     
    },
    //Asks who else contributed to the application 
    {
        type: 'input',
        message: 'Who else contributed to your application? if none write "none" ',
        name: 'contributors',
     
    },

];


function init() {
    inquirer.prompt(questions).then((response)=>{
    
// this creates the first line and main header for the repo using response in RepoName
    fs.appendFileSync("README.md", ("# " + response.repoName )+ '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })

// this creates the second line of readme application developed by using reponse to githubname 
fs.appendFileSync("README.md", ("This application was developed by: " + response.gitHubName + '\n') + '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

// adds description of the project that the user enters on description prompt
fs.appendFileSync("README.md", ( response.description ) + '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

//creates a sub-header for installation and adds any instructions the user enters
fs.appendFileSync("README.md", ("## Installation" + '\n' + response.installApp )+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

// creates a sub-header for Application usage and adds any instructions the user enters
fs.appendFileSync("README.md", ("## How to use the Application" + '\n' + response.appInstructions)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})