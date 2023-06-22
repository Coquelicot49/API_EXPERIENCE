
let radio
async function catfacts () {
   
    const [page1, page2] = await Promise.all([
        fetch(`https://catfact.ninja/breeds?page=1`),
        fetch(`https://dog.ceo/api/breed/hound/images`)
    ]);
    
    const chats1 = await page1.json()
    const chiens2 = await page2.json()
    
    return [chats1, chiens2]
}

catfacts().then(([chats1, chiens2]) => {
    // liste races chats
    let viewChats1 = chats1.data
    let race = []
    let catList = document.getElementById('testapi')
    catList.innerHTML += "<p>Cat breeds list :</p>"

    for (let i=0 ; i < viewChats1.length ; i++){
        race.push(viewChats1[i].breed)
    }

    for (let i=0; i<race.length; i++) {
        let li = document.createElement('li')
        let t = document.createTextNode(race[i]);
        li.appendChild(t)
        catList.appendChild(li)
    }

    // liste photo chien
    let viewChiens2 = chiens2.message

    for (let i=0 ; i < viewChiens2.length ; i++){
        let image = new Image()
        image.src = viewChiens2[i]
        document.getElementById("dogphoto").appendChild(image)
    }
    
});
