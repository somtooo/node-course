console.log("client side javascript file is loaded");
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    messageOne.textContent = 'Loading....';
    messageTwo.textContent = '';
    fetch('http://localhost:3000/weather?address=' + location).then((response)=>{
        if (!location){
            return messageTwo.textContent = 'Location cannot be empty'
        }
        response.json().then(({error,forecast,location})=>{
            if (error){
                return messageOne.textContent = error
            }
            messageOne.textContent = forecast;
            messageTwo.textContent = location;
        })
    });

});

