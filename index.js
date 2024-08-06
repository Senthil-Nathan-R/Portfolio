

const text=document.querySelector(".sec-text");
const textLoad =()=>{
    setTimeout(()=>{
          text.textContent="Front End Developer";
    },0)
    setTimeout(()=>{
        text.textContent="Java Developer";
    },4000)
     setTimeout(()=>{
    text.textContent="SQL Developer";
    },8000)
}
textLoad();
setInterval(textLoad,12000);


const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');

const name_error=document.getElementById('name_error');
const email_error=document.getElementById('email_error');
const message_error=document.getElementById('message_error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
    if (!hasErrors()) {
        sendMail();
    }
});

function checkInput() {
    const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let hasError = false;

    if (name.value.trim() === '') {
        name_error.innerHTML = "Name is required";
        hasError = true;
    } else {
        name_error.innerHTML = "";
    }

    if (!email.value.match(emailCheck)) {
        email_error.innerHTML = "Valid email is required";
        hasError = true;
    } else {
        email_error.innerHTML = "";
    }

    if (message.value.trim() === '') {
        message_error.innerHTML = "Message is required";
        hasError = true;
    } else {
        message_error.innerHTML = "";
    }

    return hasError;
}

function hasErrors() {
    return name_error.innerHTML !== "" || email_error.innerHTML !== "" || message_error.innerHTML !== "";
}
        
function sendMail(){
    const bodymessage=`Name : ${name.value}<br> Email : ${email.value}
    <br> Message : ${message.value}`;
    Email.send({
        SecureToken : "57fc43a3-b9ea-4a71-bd15-f5d4f942954b",
        To : 'senthil18112002@gmail.com',
        From :'senthil18112002@gmail.com',
        Subject : "Mail from Portfolio.",
        Body : bodymessage
    }).then(
        response => {
            if (response === 'OK') {
                alert('Email sent successfully!');
                form.reset();
            } else {
                alert('Failed to send email. Please try again.');
            }
        },
        error => {
            console.error('Error sending email:', error);
            alert('An error occurred while sending the email.');
        }
    );
}

