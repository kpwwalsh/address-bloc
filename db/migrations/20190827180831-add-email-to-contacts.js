"use strict";
module.exports={
up: (queryInterface, Sequelize) => {
  return queryInterface.addColumn("Contacts", "email", {                   
      allowNull: false,      
      type: Sequelize.STRING 
  });
},

down: function(queryInterface, Sequelize) {
  // logic for reverting the changes
  return queryInterface.removeColumn("Contacts", "email");
 }
}

