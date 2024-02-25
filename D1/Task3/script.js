let btnSend = document.querySelector('button');
let message = document.querySelector('h1');

btnSend.addEventListener('click', () =>{
    btnSend.innerText = 'Barevner...'

    setTimeout(()=>{
        btnSend.style.display = 'none';
        message.innerText = 'Barevy hasav';
    },1000);
});