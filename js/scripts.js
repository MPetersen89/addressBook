// Business Logic for Address Book ---------
function AddressBook() {
  this.contacts=[];
  this.currentID=0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();  
  this.contacts.push(contact);
}

AddressBook.prototype.assignID = function() {
  this.currentID ++;
  return this.currentID;
}

AddressBook.prototype.findContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {  
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }                      
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {  
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }               
  };
  return false;
}


// Business Logic for Contacts ---------
function Contact(firstName, lastName, phone) {
  this.firstName = firstName;
  this.lastName =  lastName;
  this.phone = phone;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

let addressBook = new AddressBook();
let contact = new Contact("Ada", "Lovelace", "503-555-0100");
let contact2 = new Contact("Grace", "Hopper", "503-555-0199");
addressBook.addContact(contact);
addressBook.addContact(contact2);

console.log(addressBook.contacts[0].firstName);