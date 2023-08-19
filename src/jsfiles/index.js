import Mainpage from "./mainpage.js"
import Menu from "./menu.js"
import Contact from "./contact.js"
import buttons, {home,menu,contact} from "./buttons.js"
const content = document.querySelector(".content")
// mainbody.textContent = "hello everyone"
function defaultmain()
{
    content.innerHTML=""
    Mainpage()
    
}
function defaultmenu()
{
    content.innerHTML = ""
    Menu()
}
function defaultcontact()
{
    content.innerHTML = ""
    Contact()
    
}
home.addEventListener("click",defaultmain)
menu.addEventListener("click",defaultmenu)
contact.addEventListener("click",defaultcontact)
defaultmain()



