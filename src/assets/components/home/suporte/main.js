window.addEventListener('load', ()=> {
    let btnSuporte = document.getElementById('btnSuporte')
    let DivModal = document.getElementById('DivModal')
    let imgClosedModal = document.getElementById('imgClosedModal')
    btnSuporte.onclick = () => {
        DivModal.style.display="block";
    }
    imgClosedModal.onclick= ()=> {
        DivModal.style.display="none";
    }
    
})