

const pageLoader = {
    style(content, appendTo) {
        // const myIcon = new Image();
        const myIcon = new Image();
        myIcon.src = content;
        document.getElementById(appendTo).appendChild(myIcon)
    },

    createEle(ele, txt, className, setAtt, attName,append) {
        const element = document.createElement(ele);
        element.innerText = txt;
        element.classList.add(className)
        element.setAttribute(setAtt, attName)
        document.getElementById(append).appendChild(element)

        
    },

    events(){
        var header = document.getElementsByTagName("button")
        for(let x = 0; x < header.length; x++){
            console.log(x)
            header[x].addEventListener("click", (e) => {
                var header = document.getElementsByTagName("button")
                for(let x = 0; x < header.length; x++){
                    header[x].style.textDecoration = "none";
                }
                let headerUnderline = document.getElementById(e.target.id);
                headerUnderline.style.textDecoration = "underline";
                var id = document.getElementById(e.target.className);
                var page = document.getElementsByClassName("page")
                for(var x = 0; x < page.length; x++){
                    page[x].style.display = "none"
                }
                id.style.display = "flex";
        
            })
        }

    }



    
}

export default pageLoader;