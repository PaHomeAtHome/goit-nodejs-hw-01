const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.resolve("db/contacts.json");
const testPath = path.resolve("contactsTest/contacts.json");

function listContacts() {
  fs.readFile(testPath)
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message));
}

function getContactById(contactId) {
  fs.readFile(testPath)
    .then((data) =>
      JSON.parse(data).find(
        (contact) => contact.id.toString() === contactId.toString()
      )
    )
    .then((result) =>
      result ? console.log(result) : console.log("Contact not found")
    )
    .catch((err) => console.log(err.message));
}

function removeContact(contactId) {
  fs.readFile(testPath)
    .then((data) =>
      JSON.parse(data).find(
        (contact) => contact.id.toString() === contactId.toString()
      )
        ? JSON.parse(data).filter(
            (contact) => contact.id.toString() !== contactId.toString()
          )
        : (result = null)
    )
    .then((result) =>
      result !== null
        ? fs
            .writeFile(testPath, JSON.stringify(result))
            .then(() => console.log(`Contact with ID ${contactId} removed`))
            .catch((err) => console.log(err.message))
        : console.log("Contact not found")
    )
    .catch((err) => console.log(err.message));
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = { listContacts, getContactById, removeContact, addContact };
