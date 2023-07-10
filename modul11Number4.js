function countEverySecond(x,y) {
    let i = setInterval(() => {
    console.log(x++);
    if (x > y) clearInterval(i);
    }, 1000)
}

countEverySecond(5, 15);