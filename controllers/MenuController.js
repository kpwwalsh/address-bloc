const inquirer = require('inquirer');
const ContactController = require("./ContactController");

 module.exports = class MenuController {
   constructor(){
    this.mainMenuQuestions = [
        {   
         type: "list",
          name: "mainMenuChoice",
          message: "Please choose from an option below: ",
          choices: [
            "Add new contact",
            "Date and Time",
            "Exit" 
          ]
        }
      ];
      this.book = new ContactController();
   }

 main(){
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Check date and time":
           this.getDate();
           break;
        case "Add new contact":
          this.addContact();
          break;
        case "Exit":
          this.exit();
        default:
          console.log("Invalid input");
          this.main();
      }
    })
      .catch((err) => {
       console.log(err);
    });
  }

  getDate(){
    this.clear();
    var date= Date();
    console.log(date)
    this.main();
      }

  clear(){/*method definition*/}
    addContact(){
        this.clear();
        inquirer.prompt(this.book.addContactQuestions).then((answers) => {
          this.book.addContact(answers.name, answers.phone, answers.email).then((contact) => {
            console.log("Contact added successfully!");
            this.main();
          }).catch((err) => {
            console.log(err);
            this.main();
          });
        });
      }
   
  exit(){
        console.log("Thanks for using AddressBloc!");
        process.exit();
      }
 
   getContactCount(){
    return this.contacts.length;
  }
//assignment function
  remindMe(){
    return "learning is a life-long pursuit";
   }
  };
