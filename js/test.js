// Test Object
var Swordman = {
    id: 1,
    name: "Swordman",
    status: {
        str: 54,
        agi: 12,
        vit: 77,
        int: 5,
        dex: 33,
        luk: 1
    },
    atk: function() {
        let atk = this.status.str*1.9
        return atk
    },
    matk: function() {
        let matk = this.status.int*2.3
        return matk
    },
    peko: true,
    item: {
        weaponL: "Bastard Sword",
        weaponR: "Shield",
        body: "Plate Mail",
        shoes: "Boots"
    }
}
var Magician = {
    id: 2,
    name: "Magician",
    status: {
        str: 1,
        agi: 25,
        vit: 30,
        int: 88,
        dex: 72,
        luk: 9
    },
    atk: function() {
        let atk = this.status.str*1.9
        return atk
    },
    matk: function() {
        let matk = this.status.int*2.3
        return matk
    },
    peko: false,
    item: {
        weaponL: "Arc Wand",
        weaponR: "Air Guard",
        body: "Silk Robe",
        shoes: "Red Shoes"
    }
}

let showStat = (obj) => {
    console.log(obj)
    console.log(typeof(obj))
    console.log(typeof(Swordman.name))
    for(let prop in Swordman) {
        console.log(prop)
    }
    var stats = document.getElementById("statusBox")
    let statsList = "This's "+obj+" Status <br> Atk: "
    switch(obj){
        case "Swordman":
            stats.innerHTML = statsList+Swordman.atk().toFixed(1)
            +"<br> Matk: "+Swordman.matk().toFixed(1)
            break
        case "Magician":
            stats.innerHTML = statsList+Magician.atk().toFixed(1)
            +"<br> Matk: "+Magician.matk().toFixed(1)
            break
    }
}
