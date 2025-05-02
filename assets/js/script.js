// Up Arrow Func
const upArrow = document.getElementsByClassName("up-arrow")[0]
console.log(upArrow)
window.onscroll = function () {
    if(pageYOffset > 500){
        upArrow.classList.add("active")
    } else{
        upArrow.classList.remove("active")
    }
}

// Contact API
function sendContactForm() {
    const data = {
        name: "Test",
        title: "Title Test",
        message: "Test Message",
        email: "mail@mail.com"
    };

    fetch('http://localhost:3030/api/contactus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}