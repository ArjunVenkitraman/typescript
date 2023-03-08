interface player{
    name:string
    age:string
}

function getplayers():Promise<player[]>{
    return fetch('/player.json')
    .then(res=>res.json())
    .then(res=>{
        return res as player[]
    }) 
}

getplayers()
.then(player=>{
    console.log(player.map(p=>p.name+' '+p.age+'\n').toString())
})
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

