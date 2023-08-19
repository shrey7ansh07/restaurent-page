import buttons from "./buttons.js"
import "../cssfiles/contact.css"
import sanjiimg from "../../images/sanji.jpeg"
import ramenguyimg from "../../images/ramenguy.jpeg"
import tuntunimg from "../../images/tuntun.jpeg"
import callimage from "../../icons/viber.png"
import instaimage from "../../icons/instagram.png"
import twitterimage from "../../icons/twitter.png"
import facebookimage from "../../icons/facebook.png"
function contact(name,contact,socialid,image)
{
    const person = {}
    person.imageurl = image
    person.name = name
    person.contact = contact
    person.links = socialid
    return person
}
function createcontactlink(e,chef)
{
    let icon = document.createElement("div")
    icon.classList.add("icons")
    e.appendChild(icon)
    //since there have been 4 links we will try to create 3 small images into it 
    const call = document.createElement("img")
    const instagram = document.createElement("img")
    const facebook = document.createElement("img")
    const twitter = document.createElement("img")
    instagram.src = instaimage
    call.src = callimage
    facebook.src = facebookimage
    twitter.src = twitterimage
    icon.appendChild(facebook)
    icon.appendChild(twitter)
    icon.appendChild(instagram)
    icon.appendChild(call)
    let array = [facebook,twitter,instagram]
    pagenavigation(array,chef.links)



}
function createcontactdiv(charachter)
{
    const contact = document.createElement("div")
    const image = document.createElement("img")
    contact.appendChild(image)
    image.src = charachter.imageurl
    const name = document.createElement("div")
    contact.appendChild(name)
    name.classList.add("name")
    name.textContent = charachter.name
    return contact
}

function pagenavigation(logo,links)
{
    for(let i = 0;i<logo.length;i++)
    {
        logo[i].addEventListener("click",()=>document.location.href = links[i])
    }
}
export default function contactus()
{
    const content = document.querySelector(".content")
    content.appendChild(buttons())
    const contactusat = document.createElement("div")
    content.appendChild(contactusat)
    contactusat.classList.add("description-contact")
    contactusat.textContent = "CONTACT OUR CHEFS"
    // creating contact 1 info 
    const link1 = ["https://shrey7ansh07.github.io/tic-tac-toe/","https://shrey7ansh07.github.io/dashboard/","https://shrey7ansh07.github.io/calculator/"]
    const sanji = contact("SANJIKANT",123456789,link1,sanjiimg)
    const link2 = ["https://shrey7ansh07.github.io/rock-paper-scissors/","https://shrey7ansh07.github.io/formmaking/","https://shrey7ansh07.github.io/etch-a-sketch/"]
    const ramenguy = contact("RAMEN GUY",987654321,link2,ramenguyimg)
    const link3 = ["https://shrey7ansh07.github.io/recipies/","https://shrey7ansh07.github.io/library/","https://shrey7ansh07.github.io/landing/"]
    const tuntunmosi = contact("TUN-TUN-MOSI",6969696969,link3,tuntunimg)
    const Contact = document.createElement("div")
    Contact.classList.add("contact")
    content.appendChild(Contact)
    const contact1 = createcontactdiv(sanji)
    const contact2 = createcontactdiv(ramenguy)
    const contact3 = createcontactdiv(tuntunmosi)
    Contact.appendChild(contact1)
    Contact.appendChild(contact2)
    Contact.appendChild(contact3)
    createcontactlink(contact1,sanji)
    createcontactlink(contact2,ramenguy)
    createcontactlink(contact3,tuntunmosi)


    // Contact.





}