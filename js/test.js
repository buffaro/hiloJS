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
    peko: false,
    item: {
        weaponL: "Arc Wand",
        weaponR: "Air Guard",
        body: "Silk Robe",
        shoes: "Red Shoes"
    }
}

var atk = ""
function showStat(obj){
    console.log(obj)
    var stats = document.getElementById("statusBox")
    let statsList = "This's "+obj+" Status <br> Atk: "
    switch(obj){
        case "Swordman":
            obj = Swordman
            atk = obj.status.str*1.9
            stats.innerHTML = statsList+atk
            break
        case "Magician":
            obj = Magician
            atk = obj.status.int*1.3
            stats.innerHTML = statsList+atk
            break
    }
}