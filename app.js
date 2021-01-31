document.getElementById('pin-generate-btn').addEventListener('click',function(){
    const pinNumber =  Math.floor(1000 + Math.random() * 9000);
    document.getElementById('pinvalue').value = pinNumber;
})

document.getElementById('input-cal').addEventListener('click',function(event){
    const digit = event.target.innerText;
    if(digit === 'B'){
        const typedInput = document.getElementById('show-input-cal');
        typedInput.value = remove(B);
        // typedInput.value = typedInput.value - digit;
    }
    if(digit === 'C'){
        const typedInput = document.getElementById('show-input-cal');
        typedInput.value = '';
    }
  
    else{
        const typedInput = document.getElementById('show-input-cal');
        typedInput.value = typedInput.value + digit;

    }
    
})

function verifyPin(){
    const pinOne = document.getElementById('pinvalue').value;
    const pinTwo = document.getElementById('show-input-cal').value;
    if(pinOne === pinTwo){
        document.getElementById('match').style.display = 'block';
        document.getElementById('not-match').style.display = 'none';
    }
    if( pinOne === '' && pinTwo === ''){
        alert('Please enter a valid pin');
        document.getElementById('match').style.display = 'none';
        document.getElementById('not-match').style.display = 'none';
    }
    if(pinOne !== pinTwo){
        document.getElementById('not-match').style.display = 'block';
        document.getElementById('match').style.display = 'none';
    }
    
}