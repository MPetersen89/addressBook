// Business Logic for Contacts ---------------------
function Contact(firstName, lastName, phone, email) {
  this.firstName = firstName
  this.lastName = lastName
  this.phone = phone
  this.email = email
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// Business Logic for Address Book ---------------------
function AddressBook() {
  this.contacts=[];
  this.currentID=0;
}

AddressBook.prototype.assignID = function(currentID) {
  this.currentID += 1;
  return this.currentID;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignID();  
  this.contacts.push(contact);
}

// User Interface Logic ------------------------
let addressBook = new AddressBook();

$(document).ready(function() {
  $("form#inputContact").submit(function(event) {
    event.preventDefault()
    const firstName = $("input#firstName").val();
    const lastName = $("input#lastName").val();
    const phone = $("input#phone").val();
    const email = $("input#email").val();
    let contact = new Contact(firstName, lastName, phone, email);
    console.log(contact);
    addressBook.addContact(contact);
    console.log(addressBook.contacts);
    $(".currentContacts").show();
    $("#contactOutput").append("<li>" + addressBook.contact + "</li>");
  });
})


// function addInfoToArray(firstName, lastName, phone, email) {
//   let array = [];
//   array.push(firstName);
//   array.push(lastName);
//   array.push(phone);
//   array.push(email);

//   return array
// }

// addInfoToArray($("#firstName").val(), )



// let addressBook = new AddressBook();

// let newContact = new Contact();

