function Contact(firstName, lastName, phone, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phone = phone;
  this.email = email;
}

function AddressBook() {
  this.contacts=[];
  this.currentID=0;
}

AddressBook.prototype.assignID = function() {
  this.currentID += 1;
  return this.currentID;
  console.log(currentID);
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();  
  this.contacts.push(contact);
}

$(document).ready(function() {
  $("form#inputContact").submit(function(event) {
    event.preventDefault()
    let addressBook = new AddressBook();
    let contact = new Contact($("#firstName").val(), $("#lastName").val(), $("#phone").val(), $("#email").val());
    console.log(contact);
    console.log(addressBook);
  });
})
