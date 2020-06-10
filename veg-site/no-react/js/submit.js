document.getElementById("contactForm").submit(); //Form Submission

function submit() {

    if (validation()) {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        
    }
}

function validation() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if (name === '' || email === '' || message === '') {
        alert("Please complete all fields.!");
        return false;
    } else if (!(email).match(emailReg)) {
        alert("Please Provide a Valid Email.");
        return false;
    } else {
        return true;
    }
}