import pageLoader from "./page-load";
import "./style.css";
import Icon from "./dogaocheese.jpg"

// pageLoader.createEle("h1","TESTE H1", "test2", "id","IDname")//(create Element, innerHTML, name class, create id, name id, appendChildTo)
pageLoader.createEle("div","", "main", "id", "mainContainer","content")
pageLoader.createEle("div","", "teste", "id", "header","mainContainer")
pageLoader.createEle("button","Home", "home","id","menu1","header")
pageLoader.createEle("button","Menu", "menuPage","id","menu2","header")
pageLoader.createEle("button","Contact", "contact","id","menu3","header")
pageLoader.createEle("div","", "menuContainer", "id", "menuContainer","mainContainer")
pageLoader.createEle("div","", "page", "id", "home","menuContainer")
pageLoader.createEle("div","", "page", "id", "menuPage","menuContainer")
pageLoader.createEle("div","", "page", "id", "contact","menuContainer")
pageLoader.createEle("h1","Big-Dog's Hot-Dog", "submenu", "id", "homeSub","home")
pageLoader.createEle("div","", "submenu", "id", "homeSvgLeft","homeSub")
pageLoader.createEle("div","", "submenu", "id", "homeSvgRight","homeSub")
pageLoader.createEle("p","Here you will find the most monstrously delicious hot-dogs available in this time-line. Our hot-dog's are inspired by a classic brazilian cousine street-dish: The 'dogao prensado', which translates to 'pressed big dog'. You will surely be completely satisfied after endulging in this marvelous brazilian street food.", "submenu", "id", "intro","home")
pageLoader.createEle("h2","Service Schedule", "submenu", "id", "generic","home")
pageLoader.createEle("p","Monday to Saturday: 6PM - 2AM", "submenu", "id", "hours","home")
pageLoader.createEle("h2","Location", "submenu", "id", "generic","home")
pageLoader.createEle("p","651 Morangueira Avenue, Maringa/PR - Brazil", "submenu", "id", "location","home")
pageLoader.createEle("div","", "submenuLanche", "id", "img1","menuPage")
pageLoader.createEle("div","", "submenuLancheTxt", "id", "img1Div","img1")
pageLoader.createEle("h3","Double-Dog", "submenuLanche", "id", "img1H","img1Div")
pageLoader.createEle("p","Two sausiges, tomatoes, cheese, potato sticks and special mayo sauce.", "submenuLanche", "id", "img1Txt","img1Div")
pageLoader.createEle("div","", "submenuLanche", "id", "img2","menuPage")
pageLoader.createEle("div","", "submenuLancheTxt", "id", "img2Div","img2")
pageLoader.createEle("h3","X-Filet", "submenuLanche", "id", "img2H","img2Div")
pageLoader.createEle("p","Sliced filet mignon, one sausige, tomatoes, cheese, potato sticks and special mayo sauce. ", "submenuLanche", "id", "img2Txt","img2Div")
pageLoader.createEle("div","", "submenuLanche", "id", "img3","menuPage")
pageLoader.createEle("div","", "submenuLancheTxt", "id", "img3Div","img3")
pageLoader.createEle("h3","Four-Cheeses", "submenuLanche", "id", "img3H","img3Div")
pageLoader.createEle("div","Four sausiges, four different types of cheese(mozzarella, cheddar, gouda and parmesan) and speciel mayo sauce. ", "submenuLanche", "id", "img3Txt","img3Div")
pageLoader.createEle("div","", "submenuLanche", "id", "img4","menuPage")
pageLoader.createEle("div","", "submenuLancheTxt", "id", "img4Div","img4")
pageLoader.createEle("h3","X-Everything", "submenuLanche", "id", "img4H","img4Div")
pageLoader.createEle("div","Six sausiges, 2 fried eggs, sliced ham, 2 ground meat patties, calabresa(similar to salami), cheese, potatoe sticks and special mayo sauce. ", "submenuLanche", "id", "img4Txt","img4Div")
pageLoader.createEle("div","contact@contact.com.org", "filter", "id", "contactSvg","contact")
pageLoader.createEle("div","", "contactSvg", "id", "dachshund","contactSvg")

pageLoader.events()

