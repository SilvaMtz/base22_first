slideFunction = () => {
  var menu = document.getElementById("menu");
  var slider = document.getElementById("slider");
  var innerSlider = document.getElementById("inner-slider");

  menu.classList.toggle("toggle");
  menu.classList.toggle("transition");

  slider.classList.toggle("toggle-slider");
  slider.classList.toggle("transition");

  innerSlider.classList.toggle("hide");

  setTimeout(function() {
    menu.classList.toggle("transition");
    slider.classList.toggle("transition");
  }, 350);
};


// /*onload - do not use*/
// function onLoadAnimation() {
//     document.getElementById('show-menu').className = 'active-menu';
//   };
  
//   /*animation*/
//   function MenuAnimation() {  
//     var toggleImg = document.getElementById("show-menu");
     
//       if (toggleImg.classList) { 
//       toggleImg.classList.toggle("active");
//    openMenu();
//       } else {
//           var addClass = toggleImg.className.split(" ");
//           var i = addClass.indexOf("active");
  
//           if (i >= 0) 
//               addClass.splice(i, 1);
//           else 
//               addClass.push("active");
//               toggleImg.className = addClass.join(" ");
  
//       }
//   }
//   /*open menu*/
//   function openMenu() {
//     var opacityWrap = document.getElementById("bg-opacity");
//     var mobileWrap = document.getElementById("menu-wrapper");
    
//     if (opacityWrap.classList) { 
//       opacityWrap.classList.toggle("showOpacity");
//       mobileWrap.classList.toggle("showMenu");
//     } else {
//           var removeClass1 = opacityWrap.className.split(" ");
//           var removeClass2 = mobileWrap.className.split(" ");
      
//           var i = addClass.indexOf("showMenu");
  
//           if (i >= 0) 
//               addClass.splice(i, 1);
//           else 
//               addClass.push("showMenu");
//               opacityWrap.className = addClass.join(" ");
//               mobileWrap.className = addClass.join(" ");
  
//     } 
//   }; 
