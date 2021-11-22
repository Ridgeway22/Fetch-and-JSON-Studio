// TODO: add code here
window.addEventListener("load", function() {
    const fetchPromise = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    fetchPromise.then( function(response) {
        const jsonPromise = response.json();
        let i = 0;
        jsonPromise.then( function(json) {
           
            let div = document.getElementById('container');
           json.map(function(a){
          for (;i< json.length; i++){
              const divs = `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space:  ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
                                <li>Skills ${json[i].skills}</li>
                            </ul>
                            <img class="avatar" src=${json[i].picture}/>
                    </div>
                </div>`;
                div.insertAdjacentHTML("beforeend", divs);}
            });
          
           
        });
        
});

});
