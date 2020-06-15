// Business Logic for Address Book ---------



// AddressBook.prototype.findContact = function(id) {
//   for (let i=0; i< this.contacts.length; i++) {
//     if (this.contacts[i]) {  
//       if (this.contacts[i].id == id) {
//         return this.contacts[i];
//       }
//     }                      
//   };
//   return false;
// }

// AddressBook.prototype.deleteContact = function(id) {
//   for (let i=0; i< this.contacts.length; i++) {
//     if (this.contacts[i]) {  
//       if (this.contacts[i].id == id) {
//         delete this.contacts[i];
//         return true;
//       }
//     }               
//   };
//   return false;
// }

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phone, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phone = phone;
  this.email = email;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

$(document).ready(function() {
  $("form#inputContent").submit(function(event) {
    event.preventDefault();
    
    let contact = new Contact($("#firstName").val(), $("#lastName").val(), $("#phone").val(), $("#email").val());
    console.log(contact);
    $(".currentContacts").show();
  });

console.log(contact);
console.log(addressBook);
});
// addressBook.addContact(contact);
// $("contact.id").val(), 