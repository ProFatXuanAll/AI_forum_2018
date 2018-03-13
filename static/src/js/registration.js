const taai = document.getElementById('taai');
taai.style.display = 'none';

const fee = document.getElementById('fee');
fee.addEventListener('change', function() {

    if( fee.value === '2500' || fee.value === '1400' ){
        taai.style.display = 'block';
    }
    else{
        taai.style.display = 'none';
    }
} );

document.getElementById('submitBtn').addEventListener( 'click', function () {
    
    alert('您確定要送出表單嗎？');
} );
