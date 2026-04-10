function loadContact() {
  const content = document.getElementById("content");

  const contactDiv = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "Phone: 123-456-7890";

  const address = document.createElement("p");
  address.textContent = "Address: 123 Main Street, Vancouver";

  contactDiv.appendChild(heading);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(address);

  content.appendChild(contactDiv);
}

export default loadContact;