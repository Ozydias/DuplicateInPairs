


// 获取勋章数据
function getMedals() {
    fetch('http://124.221.147.124/chfs/shared/data/json/medals.json')
    .then(res => res.json()).then(res => {
        console.log("勋章数据：");
        console.log(res);
    });
}


getMedals();

// console.log(getMedals());
