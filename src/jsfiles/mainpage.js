import '../cssfiles/mainpage.css'
import buttons from "./buttons.js"
import Image from "../../images/restaurent.jpeg"
import Image2 from "../../images/restaurent2.png"

export default function webpage()
{
        
        const content = document.querySelector(".content")
        content.appendChild(buttons())
        // for heading
        const heading = document.createElement("div")
        content.appendChild(heading)
        heading.textContent = "CRAVING FOR SOMETHING"
        heading.classList.add('heading')

        //for description

        const description = document.createElement("div")
        content.appendChild(description)
        description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem harum, quos itaque explicabo odit, quod corporis alias neque accusamus expedita repellat, doloremque adipisci veritatis laborum fuga voluptatem libero hic!"
        description.classList.add("description")

        //for image
        const imagediv = document.createElement('div')
        let image = document.createElement('img')
        let image2 = document.createElement('img')
        image.src = Image
        image2.src = Image2
        imagediv.appendChild(image)
        imagediv.appendChild(image2)
        image.classList.add("image")
        image2.classList.add("image")
        content.appendChild(imagediv)
        imagediv.classList.add('imagediv')


        //more about the restaurent and special one
        const para = document.createElement("p")
        para.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni esse fugiat dolore ullam expedita molestiae repellendus illo quo sed consectetur corrupti ex rem, recusandae dolor laboriosam hic eveniet pariatur. Autem."
        content.appendChild(para)
        para.classList.add("para")

}




