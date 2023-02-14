// const API_URL = "https://api.nasa.gov/mars-photos/api/v1/";
const API_URL = "http://jsonplaceholder.typicode.com";
const xhr = new XMLHttpRequest();


    

function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
        
        
        
        
        const data = JSON.parse(this.response)
        const HTMLResponse = document.querySelector("#app");
        // console.log(data);

        const tpl = data.map(user => `<li>${user.name} ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
}

xhr.addEventListener("load", onRequestHandler);
// xhr.open("GET", `${API_URL}/rovers/?api_key=mVrCaupicmefXa0Hht210JRrbaFPgOQKPe5FbobX`);
xhr.open("GET", `${API_URL}/users`);
xhr.send();

