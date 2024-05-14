fetch("https://pizza.kando-dev.eu/Pizza").then(function (res){
    return res.json();
})
.then(function (datas){
    console.log(datas);
    for (const data of datas.data){
        document.getElementById("content").innerHTML += data.last_name
    }
})