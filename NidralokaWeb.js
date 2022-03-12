//defining inventory arrays
const playerInventory = ["key"];
const playerCoords = [0,0]

//defining locations
const LocationData = [
// 0: name
// 1: coordinates
// 2: connections
// 3: flavor
    [//0
        "watermill","coordinates","connections",
        "flavor"
    ],
    [//1
        "tree","coordinates","connections",
        "flavor"
    ],
    [//2
        "shore","coordinates","connections",
        "flavor"
    ],
    [//3
        "farm plot","coordinates","connections",
        "flavor"
    ],
    [//4
        "northeastern grasses","coordinates","connections",
        "flavor"
    ],
    [//5
        "western gate","coordinates","connections",
        "flavor"
    ],
    [//6
        "westward path","coordinates","connections",
        "flavor"
    ],
    [//7
        "cabin","coordinates","connections",
        "flavor"
    ],
    [//8
        "eastward path","coordinates","connections",
        "flavor"
    ],
    [//9
        "eastern gate","coordinates","connections",
        "flavor"
    ],
    [//10
        "southwestern grasses","coordinates","connections",
        "flavor"
    ],
    [//11
        "southward path","coordinates","connections",
        "flavor"
    ],
    [//12
        "southeastern grasses","coordinates","connections",
        "flavor"
    ],
    [//13
        "altar","coordinates","connections",
        "flavor"
    ],

];

//the realm of the forms
const platonicItems = [
    "candle", //0
    "medallion", //1
    "knife", //2
    "hoe", //3
    "rake", //4
    "trowel", //5
    "scythe", //6
    "watering can", //7
    "shovel", //8
    "bag of small seeds", //9
    "bag of large seeds", //10
    "bag of elongated seeds", //11
    "pale bulb", //12
    "hard pod", //13
    "jewel", //14
    "key", //15
    "coin pouch", //16
    "fruit", //17
    "black fruit", //18
    "red fruit", //19
    "golden fruit", //20
    "red liquid", //21
    "blue liquid", //22
    "purple liquid", //23
    "medallion charge", //24
    "hay", //25
    "wildflowers", //26
    "mushrooms", //27
    "greenish berries", //28
    "lavender rose", //29
    "serrated leaf", //30
    "unserrated leaf", //31
    "splotchy tuber", //32
    "mandrakes' heart", //33
    "fibrous roots", //34
    "raven feather", //35
    "(human?) bone", //36
    "(human?) skull", //37
];
const ItemFlavors = [
    "It looks like it could burn for a while.", //0
    "It looks very old. There's a slot in the center.", //1
    "You could cut yourself with this, if you're not careful. There's a symbol stamped on the blade.", //2
    "It's rusty, and caked with dirt", //3
    "Bits of dry leaves cling to the many prongs.", //4
    "Grades etched into the metal mark depth. You don't recognize the script.", //5
    "The blade is angled perfectly for cutting grass, although it hasn't been sharpened in a while.", //6
    "The rough copper spout is tinged with green.", //7
    "You might need some heft to use this.", //8
    "The seeds inside are small, round, and darkly colored.", //9
    "The seeds inside are wrinkled and grey.", //10
    "The seeds inside are winged pods, the color of red earth.", //11
    "The silvery skin bulges in lobes.", //12
    "The smooth golden wood looks even older than the medallion.", //13
    "Sparkly!", //14
    "Losing this would be a bad idea.", //15
    "The alloy is cool against your hand.", //16
    "The skin is ashen, but clean.", //17
    "The skin is inky black.", //18
    "The skin is a tantalizing red.", //19
    "The skin looks like tarnished gold, yet it sinks under your fingers.", //20
    "Intense as a sunset, fear like blood, vitality like the fruits of the earth. The oil of the red flint.", //21
    "The most human color. Royal, unnatural, the oceans and the soul. The dew of the blue rose.", //22
    "As above, so below. The iris of the eye of god.", //23
    "The eye of god is open.", //24
    "Coarse and matted, the grass is interwoven with weeds.", //25
    "Ranging from delicate to stocky, there are colors here you never thought possible.", //26
    "Brown, red, pale, the poisonous and the savory.", //27
    "Smooth skin and a rough stem.", //28
    "The petals overlap like people in each others' lives.", //29
    "The veins lace like an old man's hand.", //30
    "The edge looks sharp.", //31
    "Rough to the touch, are these blotches normal?", //32
    "Blood-red, the smooth skin of the root is contorted in radial wrinkles.", //33
    "Pale and hair-like, and soft as bird-down", //34
    "The length of a finger, it's a soft black.", //35
    "It must have been here a long time.", //36
    "It must have been here a long time. Something lies beyond the darkness of the eyes.", //37
];



function nidAction() {
    var event = document.getElementById("nidAction").value;
    const nidFlavorText = document.getElementById("nidFlavorText");
    if (event.includes("wake up to a new world")) {
        nidFlavorText.textContent = "haven't gotten to this bit yet";
    }
    if (event.includes("help")) {
        nidFlavorText.textContent = "help; wake up to a new world; nothing else as of yet ^^";
    }
}
//receiving and loading a save file (not yet a priority)
function nidLoadSave() {
    var receivedsaveFile = document.getElementById("nidLoadSave").value;
}