function myFunc()  {
    let now = new Date();
    let time = now.getDate() + "/" + (now.getMonth() +1) + "/" + now.getFullYear()+ "   " +now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById('display-time').innerHTML = time;
}
setInterval(myFunc, 1000);

