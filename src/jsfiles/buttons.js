import "../cssfiles/button.css"
export const home = document.createElement('button')
export const menu = document.createElement('button')
export const contact = document.createElement('button')
home.textContent = "HOME"
menu.textContent = "MENU"
contact.textContent = "CONTACT US"
export default function button()
{
  const buttoncontainer = document.createElement("div")
  buttoncontainer.classList.add("buttoncontainer")
  buttoncontainer.appendChild(home)
  buttoncontainer.appendChild(menu)
  buttoncontainer.appendChild(contact)
  return buttoncontainer
}