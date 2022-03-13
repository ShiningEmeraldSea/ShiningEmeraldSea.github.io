////defining things

///defining the map

//defining names
const locationsNames = [
    "river shore",//2
    "watermill",//1
    "gnarled tree",//3
    "farm plot",//4
    "northward path",//0
    "northeastern grasses",//5
    "western gate",//6
    "westward path",//7
    "cabin",//8
    "eastward path",//9
    "eastern gate",//10
    "southwestern grasses",//11
    "southward path",//12
    "southeastern grasses",//13
    "altar",//14
];
//flavor text
const locationsFlavor = [
    "The river here is wide and loud, an unstoppable flowing. The shore is a transition from grass to rock and silt. The water is cold, but is it safe to drink? Inland is some fenced-in farmland [north], and a desire-path meanders to a water-mill in the distance [east].",//0
    "A more trustworthy construction than the cabin, yet older-looking, a massive wheel meshes with the force of the river. Within, two large stones grind dust into dust. The millstones are dark, sparkling with unnatural color. Supports clogged with algae, a wooden footbridge leads to a river island [east]. Facing the front door is a path of dark flagstones [south].",//1
    "A grassy island in the midst of a wide river. The island is dominated by a single gnarled tree, roots bulging up from the earth. On the branches, fruit grows. One wooded bridge leads across the water to a weed-choked field [south], the other to a water-mill [west]",//2
    "Enclosed by wicker fencing, the dry soil shows signs of neglect, such as patches of crabgrass, and an anthill. Still, it looks fertile enough. A shed of similar construction to the cabin leans drunkardly. A dark-paved path [east] and a light blue path [south] lead elsewhere. You can hear the sound of running water [north].",//3
    "The northward path is marked by dark flagstones, sparkling under dust and stray soil. Going straight [north] leads to a watermill, while to the left [west] is a sizable plot of land. To the right [east] is a grassy field, pale green and interspersed with weeds. In the distance is a cabin [south].",//4
    "Weeds have made themselves at home here, neighbors to the tough grasses. Brambles warn with their thorns, others say farewell with a gift of burrs. Two paths arc across this area, one dark [west] and one red [south]. A footbridge of old and green-splotched wood leads over the river's edge, to an island in its midst [north].",//5
    "West is for ending. The obsidian black gate is locked. A blue path leads back down, back down to the world [east].",//6
    "The westward path leads uphill, sandy soil kept in place by light blue steps, the paint has a damp glisten. The path forks and re-converges around a font of deep blue liquid, continuing to a gate [west]. Away on one side is the wattle fencing of a plot of land [north], on the other a soft and verdant green [south]. In the distance is a cabin [east].",//7
    "The starless and moonless sky is visible through the gaps in the rickety cabin's walls and roof. In one corner is a simple bed and bedside table, in the other a wooden chest. Four paths wander into the distance [north] [south] [east] [west].",//8
    "The eastward path is well-trodden, sparse grass giving way to rich terracotta earth. The path forks and reconverges around a well of red liquid, continuing to a gate [east]. On either side are unkempt fields: one drowned and muddy, [south] and one overtaken by stocky weeds [north]. In the distance is a cabin [west].",//9
    "East is for beginning. The auburn rust-scaled gate is locked. An earth-red path leads back, back to your home [west].",//10
    "The grass here is verdant, soft, and cool. Wildflowers bloom in strange colors across the steep incline. A femur pokes up from the dark earth. Two paths wander through this area, one blue [north] and one white [east].",//11
    "The southward path is clean and dry, a lattice of round white pebbles that shine like the moon through fog. At the end is an altar [south]. On either side are a verdant green [west], and a muddy [east] field. In the distance is a cabin [north].",//12
    "A variety of mushrooms grow from the drowned land of mucky grass and murky pools. A worm crawls over to greet you. Two paths run through this area, one red [north] and one white [west].",//13
    "An altar looms before you, made from a dark stone that sparkles with unnatural color. A set of steps on each of the sides leads up the square platform. At the top, a stone table lies empty, overseen by the form of an enigmatic god. The surface of the stone table looks scortched. A white path leads back [south].",//14
];
//location coordinates
const locationsCoords = [
    "-1,2",//0
    "0,2",//1
    "1,2",//2

    "-1,1",//3
    "0,1",//4
    "1,1",//5

    "-2,0",//6
    "-1,0",//7
    "0,0",//8
    "1,0",//9
    "2,0",//10

    "-1,-1",//11
    "0,-1",//12
    "1,-1",//13

    "0,-2",//14
];

///the realm of the forms

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
    "broken boat" //38
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
    "Made of deep auburn wood. What destroyed it so completely? Its silver lantern is empty.",
];

////functions

///major functions

//input affects world, affects output text
function nidAction() {
    var event = document.getElementById("nidAction").value;
    const nidFlavorText = document.getElementById("nidFlavorText");
    if (event.includes("wake up to a new world")) {
        nidSetUp()
        nidScreenUpdate()
        nidFlavorText.textContent = "You wake up. This world is cold and dark, but beautiful. There's a key in your pocket.";
    }
    if (event.includes("help")) {
        nidFlavorText.textContent = "help; wake up to a new world; go CARDINAL DIRECTION";
    }
    if (event.includes("go"))
        nidGo(event.replace("go ",""));
}

//function handling movement
function nidGo(direction) {
    var playerCoordsString = readBrowser("playerCoords")
    var playerCoordsStringSplit = playerCoordsString.split(",")
    var testPlayerCoords = [parseInt(playerCoordsStringSplit[0]), parseInt(playerCoordsStringSplit[1])]
    if (direction.includes("north")) {
        testPlayerCoords[1] = testPlayerCoords[1] + 1;
    } else {}
    if (direction.includes("south")) {
        testPlayerCoords[1] = testPlayerCoords[1] - 1;
    } else {}
    if (direction.includes("east")) {
        testPlayerCoords[0] = testPlayerCoords[0] + 1;
    } else {}
    if (direction.includes("west")) {
        testPlayerCoords[0] = testPlayerCoords[0] - 1;
    } else {}

    testPlayerCoordsString = testPlayerCoords.toString()
    if (locationsCoords.includes(testPlayerCoordsString)) {
        storeBrowser("playerCoords",testPlayerCoordsString)
        nidScreenUpdate()
        nidFlavorText.textContent = locationsFlavor[locationsCoords.indexOf(testPlayerCoordsString)]
    } else {
        nidFlavorText.textContent = "The way is blocked."
    }
}
//a function to bring client data to the proper blank slate
function nidSetUp() {
    storeBrowser("playerInventory",["key"])
        storeBrowser("playerCoords","0,0")
        storeBrowser("locationsInventory",[
            ["hard pod"], //0,
            [], //1,
            [], //2,
            ["hoe","trowel","watering can","bag of small seeds","bag of large seeds","bag of elongated seeds","pale bulb"], //3,
            ["rake","shovel","scythe"], //4,
            [], //5,
            [], //6,
            ["candle","medallion","knife","coin pouch"], //7,
            [], //8,
            [], //9,
            [], //10,
            [], //11,
            [], //12,
            [], //13,
            [], //14,
        ])
}

///misc functions

//functions to store (arrays) in localStorage, and to read them, respectively.
//("key" parameter is always a string for both of these)
function storeBrowser(key,value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function readBrowser(key) {
    return JSON.parse(localStorage.getItem(key))
}

//updates player location and inventory
function nidScreenUpdate() {
    var playerInventory = readBrowser("playerInventory")
    var playerCoords = readBrowser("playerCoords")
    nidScreenLocation.textContent = ("Location: " + locationsNames[locationsCoords.indexOf(playerCoords)]);
    nidScreenInventory.textContent = ("Inventory: " + playerInventory);
}
//loading and giving a save file respectively (not yet a priority)
function nidSaveImport() {
    var receivedsaveFile = document.getElementById("nidLoadSave").value;
    alert("no code here yet!")
}
function nidSaveExport() {
    alert("no code here yet!")
}
