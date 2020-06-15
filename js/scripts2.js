function Contact(firstName, lastName, phone, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phone = phone;
  this.email = email;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
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
  contact.id = this.assignID();  
  this.contacts.push(contact);
}

$(document).ready(function() {
  $("form#inputContact").submit(function(event) {
    event.preventDefault()
    let addressBook = new AddressBook();
    let contact = new Contact($("#firstName").val(), $("#lastName").val(), $("#phone").val(), $("#email").val());
    console.log(contact);
    addressBook.addContact(contact);
    console.log(addressBook);
    $(".currentContacts").show();
    $("#contactOutput").append("<li>" + contact.firstName + " " + contact.lastName + ", " + contact.phone + ", " + contact.email + "</li>");
  });
})





