
let radio
async function catfacts () {
   
    const [page1, page2] = await Promise.all([
        fetch(`https://catfact.ninja/breeds?page=1`),
        fetch(`https://dog.ceo/api/breeds/list/all`)
    ]);
    
    const chats1 = await page1.json()
    const chats2 = await page2.json()
    
    return [chats1, chats2]
}

catfacts().then(([chats1, chats2]) => {
    let viewChats1 = chats1.data
    let viewChats2 = chats2.message[0]
    console.log(viewChats2)
    let race = []

    for (let i=0 ; i < viewChats1.length ; i++){
        race.push(viewChats1[i].breed)
    }
    // for (let i=0 ; i < viewChats2.length ; i++){
    //     race.push(viewChats2.message[i])
    // }
    race.push(viewChats2)
    document.getElementById("testapi").innerText = race
});



// radiofrance().catch(error => {
//     error.message;
// });

//console.log(radiofrance())

// let viewradio = radiofrance()
// console.log(viewradio)
//document.getElementById('testapi').innerText = viewradio
