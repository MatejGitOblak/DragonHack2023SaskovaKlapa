let request = new XMLHttpRequest();
request.open('GET', 'https://icanhazdadjoke.com/slack');
request.send();
request.onload = function() {
    if (request.status === 200) {
        let response = JSON.parse(request.response);
        main_h1 = document.getElementById("main_h1");
        main_h1.innerHTML = response.attachments[0].text;
        console.log(response.attachments[0].text)
    } else {
        console.log(`error ${request.status} ${request.statusText}`);
    }
}