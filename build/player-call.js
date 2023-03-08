"use strict";
function getplayers() {
    return fetch('/player.json')
        .then(res => res.json())
        .then(res => {
        return res;
    });
}
getplayers()
    .then(player => {
    console.log(player.map(p => p.name + ' ' + p.age + '\n').toString());
});
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
