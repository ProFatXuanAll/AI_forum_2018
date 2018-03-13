const taai = document.getElementById('taai');
const fee = document.getElementById('fee');
fee.value = '2500';
fee.addEventListener('change', function() {

    if( fee.value === '2500' || fee.value === '1400' )
        taai.style.display = 'block';
    else
        taai.style.display = 'none';
} );

document.getElementById('submitBtn').addEventListener( 'click', function () {
    
    let ok = checkform();

    console.log(ok);
	if( ok === true ) {
        if(!confirm('您確定要送出表單嗎？')) return;
    }
    else {
        console.log("here is alert");
        alert('表單內容有誤，請重新填寫。');
        return;
    }
} );

function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function checkform() {
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const taaiId = document.getElementById('taaiId');
    let ok = true;

    if( fname.value === '' ) {
        fname.classList.add('invalid');
        ok = false;
    }
    else
        fname.classList.remove('invalid');

    if( lname.value === '' ) {
        lname.classList.add('invalid');
        ok = false;
    }
    else
        lname.classList.remove('invalid');

    if( phone.value === '' ) {
        phone.classList.add('invalid');
        ok = false;
    }
    else
        phone.classList.remove('invalid');

    if( email.value === '' || !validateEmail(email.value) ) {
        email.classList.add('invalid');
        ok = false;
    }
    else
        email.classList.remove('invalid');

    if( fee.value === '2500' || fee.value === '1400' ){
        if( taaiId.value === '' ) {
            taaiId.classList.add('invalid');
            ok = false;
        }
        else
            taaiId.classList.remove('invalid');
    }

    return ok;
}
