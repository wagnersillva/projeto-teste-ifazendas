window.onload = () => {
    let navbarToggler= document.getElementById('navbarToggler')
    navbarToggler.addEventListener('click',()=>{
        let navbarNav= document.getElementById('navbarNav')
        let navbarIcon= document.getElementById('navbarIcon')
        let condition = navbarToggler.classList.contains('active')
        if(condition){
            navbarToggler.classList.remove('active')
            navbarIcon.style.transform ="rotate(0deg)"
            setTimeout(()=>{
                navbarNav.classList.remove('show')
            }, 300)
        } else {
            navbarToggler.classList.add('active')
            navbarIcon.style.transform ="rotate(180deg)"
            setTimeout(()=>{
                navbarNav.classList.add('show')
            }, 300)
        }
    })
}