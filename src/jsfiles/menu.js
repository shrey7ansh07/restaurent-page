import image1 from "../../images/food1.jpeg"
import image2 from "../../images/food2.jpeg"
import image3 from "../../images/food3.jpeg"
import buttons from "./buttons.js"
import "../cssfiles/menu.css"
export default function menu()
{
    //buttons
    const content = document.querySelector(".content")
    content.appendChild(buttons())
    //const description
    const description = document.createElement("div")
    description.classList.add("description-menu")
    content.appendChild(description)
    description.textContent = "TODAY'S SPECIAL"


    //images
    const imageconatiner = document.createElement("div")
    imageconatiner.classList.add("menu-img-container")
    content.appendChild(imageconatiner)
    const Image1 = document.createElement("img")
    Image1.src = image1
    imageconatiner.appendChild(Image1)
    const Image2 = document.createElement("img")
    Image2.src = image2
    imageconatiner.appendChild(Image2) 
    const Image3 = document.createElement("img")
    Image3.src = image3
    imageconatiner.appendChild(Image3)

    //buttons to order or eat
    const buttoncontainer = document.createElement("div")
    buttoncontainer.classList.add("buttoncontainer")
    const order = document.createElement("button")
    order.textContent = "ORDER NOW"
    const eat = document.createElement("button")
    eat.textContent = "EAT NOW"
    buttoncontainer.appendChild(order)
    buttoncontainer.appendChild(eat)
    content.appendChild(buttoncontainer)
    

    

}
