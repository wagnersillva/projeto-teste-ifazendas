window.addEventListener('load', ()=> {
    let btnSuporte = document.getElementById('btnSuporte')
    let DivModal = document.getElementById('DivModal')
    let imgClosedModal = document.getElementById('imgClosedModal')
    btnSuporte.onclick = () => {
        setTimeout(()=>{
            DivModal.style.display="block";
        },10)
    }
    imgClosedModal.onclick= ()=> {
        DivModal.style.display="none";
    }
})