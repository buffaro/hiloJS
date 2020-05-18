// Test Object
let swordman = {
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
let atk = swordman.status.str*1.8
document.write("Atk : "+atk)