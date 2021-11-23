// TODO: add code here
window.addEventListener("load", function() {
    const fetchPromise = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    fetchPromise.then( function(response) {
        const jsonPromise = response.json();
        
        jsonPromise.then( function(json) {
            let i = 0;
            let div = document.getElementById('container');
                const count = document.getElementById("count");
             count.innerHTML = `Number of Astronauts ${json.length}`;
            let divs;
           json.map(function(a){
               const organize = json.sort((a,b)=>
                   b.hoursInSpace - a.hoursInSpace);
               console.log(organize);
          for (;i< json.length; i++){
              if (json[i].active){
              divs = `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space:  ${json[i].hoursInSpace}</li>
                                <li style='color: green' >Active: ${json[i].active}</li>
                                <li>Skills ${json[i].skills}</li>
                            </ul>
                            <img class="avatar" src=${json[i].picture}>
                    </div>
                </div>`;}
                else {
                    divs = `
                      <div class="astronaut">
                          <div class="bio">
                              <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                  <ul>
                                      <li>Hours in space:  ${json[i].hoursInSpace}</li>
                                      <li>Active: ${json[i].active}</li>
                                      <li>Skills ${json[i].skills}</li>
                                  </ul>
                                  <img class="avatar" src=${json[i].picture}>
                          </div>
                      </div>`;}
               
                div.insertAdjacentHTML("beforeend", divs);
            }
            });
          
           
        });
        
});

});
