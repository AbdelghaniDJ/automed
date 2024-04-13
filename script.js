/*var n = prompt("Enter The Number Of Nodes");

function create(n) {
    'use strict';
    for (var i = 0; i <= n; i++) {
        var mydiv = document.createElement('div');
        mydiv.setAttribute('id', 'div' + i); // Set a unique id for each div
        mydiv.textContent = i;
        document.body.appendChild(mydiv);

        var myattr = document.createAttribute('class');
        var myatr = document.createAttribute('draggable');
        var myatttr = document.createAttribute('id');
        myattr.value = 'custom';
        myatr.value = 'true';
        myatttr.value = 'drag';
        mydiv.setAttributeNode(myattr);
        mydiv.setAttributeNode(myatr);
        mydiv.setAttributeNode(myatttr);

        mydiv.classList.add('custom'); // Add the 'custom' class to apply styles
    }
}

create(n);

var draggables = document.querySelectorAll('.drag'); // Select all elements with class 'drag'

draggables.forEach(function(el) {
    dragElement(el); // Apply drag functionality to each draggable element
});

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id)) {
        /* if present, the header is where you move the DIV from:*/
       /* document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
       /* elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.Event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.Event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
       /* document.onmouseup = null;
        document.onmousemove = null;
    }
}
*/
/* typing animation*/
var typed = new Typed(".typing", {
    strings: [ "Association","Students In Radiology"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop:true
})

/* aside nav */

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
           removeBackSection();

            for(let j=0;j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    //console.log("back-section" + navList[j].querySelector("a"));
                   // allSection[j].classList.add("back-section");
                   addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            ShowSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })

      }
      function removeBackSection(){
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
      }
      function addBackSection(num){
        allSection[num].classList.add("back-section");
      }
      function ShowSection(element)
      {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target  =   element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")        
      }
      function updateNav(element)
      {
        for(let i=0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target  =   element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
      }
      document.querySelector(".hire-me").addEventListener("click", function() {
        const sectionIndex = this.getAttribute("data-section-index");
        
        ShowSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
        
      })
const navTogglerBtn = document.querySelector('.nav-toggler'),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click", () => {

        asideSectionTogglerBtn();
      })
      function asideSectionTogglerBtn()
      {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
      }