// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         console.log(entry)
//         if(entry.isIntersecting){
//             entry.target.classList.add('show');
//         }
//         else{
//             entry.target.classList.remove('show');
//         }
//     })
// })

// const hiddenElements = document.querySelector(".hidden")
// hiddenElements.forEach((el)=> observer.observe(el));


const cursor = document.querySelector(".cursor");

document.addEventListener('mousemove', e => {
  console.log(e)
  cursor.setAttribute("style","top: "+ e.pageY +"px; left: " +e.pageX+"px;" )
})

document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(()=>{
      cursor.classList.remove("expand")
  },500)
})

function subscribe(){
  alert("Go back to Login")
}