let proj;
fetch('../JS-Project/projects.json')
    .then(response =>{
        return response.json();
    }).then(projects => {
        console.log(projects);
        proj= projects;
        parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

function parseData(data){
    for(let i=0; i<data.projects.length; i++){
    document.getElementById("projects").innerHTML += `<a href="../JS-Project/${data.projects[i].subdomain}.html"}>
    <div class="row project" id="${data.projects[i].subdomain}">
        <div class="mainimg"><img src="../JS-Project/assets/${data.projects[i].mainimg}"</div> 
         <div class="description"><h3>${data.projects[i].name}</h3>
         <p class="subtitle">${data.projects[i].subtitle}</p>
        <p>${data.projects[i].abstract}</p></div>
        </div></a>`;
    }
}

for(b of document.querySelectorAll("#buttons button")){
    b.addEventListener("click", e=>{
        console.log(e.target.value);
        sortProjects(e.target.value);
    })
}

function sortProjects(button){
    if(button == "all"){
        for(i=0; i<proj.projects.length; i++){
            document.getElementById(proj.projects[i].subdomain).style.display ="flex";
        }
    }else if(button != undefined){
        for(i=0; i<proj.projects.length; i++){
            if(proj.projects[i].category.includes(button)== true){
                document.getElementById(proj.projects[i].subdomain).style.display ="flex";
            }else{
                document.getElementById(proj.projects[i].subdomain).style.display ="none";
            }
        }
    }else{
        console.log("error, button value is undefined");
    }
}

