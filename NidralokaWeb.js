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
    "A grassy island in the midst of a wide river. The island is dominated by a single gnarled tree, roots bulging up from the earth. On the branches, fruit grows. One wooden bridge leads across the water to a weed-choked field [south], the other to a water-mill [west]",//2
    "Enclosed by wicker fencing, the dry soil shows signs of neglect, such as patches of crabgrass, and an anthill. Still, it looks fertile enough. A shed of similar construction to the cabin leans drunkardly. A dark-paved path [east] and a light blue path [south] lead elsewhere. You can hear the sound of running water [north].",//3
    "The northward path is marked by dark flagstones, sparkling under dust and stray soil. Going straight [north] leads to a watermill, while to the left [west] is a sizable plot of land. To the right [east] is a grassy field, pale green and interspersed with weeds. In the distance is a cabin [south].",//4
    "Weeds have made themselves at home here, neighbors to the tough grasses. Brambles warn with their thorns, others say farewell with a gift of burrs. Two paths arc across this area, one dark [west] and one red [south]. A footbridge of old and green-splotched wood leads over the river's edge, to an island in its midst [north].",//5
    "West is for ending. The obsidian black gate is locked. A blue path leads back down, back down to the world [east].",//6
    "The westward path leads uphill, sandy soil kept in place by navy blue steps, the paint has a damp glisten. The path forks and re-converges around a font of brilliant blue liquid, continuing to a gate [west]. Away on one side is the wattle fencing of a plot of land [north], on the other a soft and verdant green [south]. In the distance is a cabin [east].",//7
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

const locationsInventories = [ //actual inventories are in localstorage
    "riverShoreInventory",//0
    "watermillInventory",//1
    "gnarledTreeInventory",//2
    "farmPlotInventory",//3
    "northwardPathInventory",//4
    "northeasternGrassesInventory",//5
    "westernGateInventory",//6
    "westwardPathInventory",//7
    "cabinInventory",//8
    "eastwardPathInventory",//9
    "easternGateInventory",//10
    "southwesternGrassesInventory",//11
    "southwardPathInventory",//12
    "southeasternGrassesInventory",//13
    "altarInventory",//14
];

///the realm of the forms

const platonicItems = [
    " candle", //0
    " medallion", //1
    " knife", //2
    " hoe", //3
    " rake", //4
    " trowel", //5
    " scythe", //6
    " watering can", //7
    " shovel", //8
    " bag of small seeds", //9
    " bag of large seeds", //10
    " bag of elongated seeds", //11
    " pale bulb", //12
    " hard pod", //13
    " jewel", //14
    " key", //15
    " coin pouch", //16
    " fruit", //17
    " black fruit", //18
    " red fruit", //19
    " golden fruit", //20
    " red liquid", //21
    " blue liquid", //22
    " purple liquid", //23
    " medallion charge", //24
    " hay", //25
    " wildflowers", //26
    " mushrooms", //27
    " greenish berries", //28
    " lavender rose", //29
    " curled thorns", //30
    " serrated leaves", //31
    " splotchy tuber", //32
    " mandrake heart", //33
    " fibrous roots", //34
    " raven feather", //35
    " bone", //36
    " skull", //37
    " broken boat", //38
    " dark stone", //39
    " white stone", //40
    " cauldron", //41
    " rain gauge", //42
    " book", //43
    " sticks", //44
    " psilocybe azurescens" //45
];
const itemFlavors = [
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
    "Silvery grey, it curls like an animal's horn.", //30
    "The edge looks sharp.", //31
    "Rough to the touch, are these blotches normal?", //32
    "Blood-red, the smooth skin of the root is contorted in radial wrinkles.", //33
    "Pale and hair-like, and soft as bird-down", //34
    "The length of a finger, it's a soft black.", //35
    "It must have been here a long time.", //36
    "It must have been here a long time. Something lies beyond the darkness of the eyes.", //37
    "Deep auburn wood, shattered and splintered. Its silver lantern is empty.", //38
    "It sparkles with unnatural color.", //39
    "It shines like the moon through fog.", //40
    "Rough cast iron, but just small enough to carry.", //41
    "A long glass tube painted with grades. You don't recognize the script.",//42
    "Bound in old leather, its pages have diagrams and text in an unknown language.",//43
    "More kindling than firewood, the green and the dry.", //44
    "An unassuming thing, small and brown.",//45
];

////functions

///major functions

//input affects world, affects output text
function nidAction() {
    var event = document.getElementById("nidAction").value;
    const nidFlavorText = document.getElementById("nidFlavorText");
    var currentLocationNumber = locationsCoords.indexOf(readBrowser("playerCoords"))
    var currentLocationInventory = locationsInventories[currentLocationNumber]
    var currentLocationItems = readBrowser(currentLocationInventory)
    var playerInventory = readBrowser("playerInventory")
    if (event.includes("wake up to a new world")) {
        nidSetUp()
        nidScreenUpdate()
        nidFlavorText.textContent = "You wake up. This world is cold and dark, but beautiful. There's a key in your pocket.";
    } else
    if (event.includes("help")) {
        nidFlavorText.textContent = "help; wake up to a new world; go CARDINAL DIRECTION; search area; pick up ITEM; set down ITEM; use ITEM (or use ITEM, ITEM etc.);";
    } else
    if (event.includes("go")) {
        nidGo(event.replace("go ",""));
    } else
    if (event.includes("search area")) {
        nidFlavorText.textContent = "There is:" + currentLocationItems;
    } else
    if (event.includes("pick up")) {
        let item = event.replace("pick up","");
        if (currentLocationItems.includes(item)) {
            storeBrowser(currentLocationInventory,arrayRemove(currentLocationItems,item));
            playerInventory.push(item);
            storeBrowser("playerInventory",playerInventory);
            nidScreenUpdate();
            nidFlavorText.textContent = "You picked up the"+item+". "+itemFlavors[platonicItems.indexOf(item)];
        } else {
            nidFlavorText.textContent = "There's nothing of that sort to pick up."
        }
    } else
    if (event.includes("set down")) {
        let item = event.replace("set down","");
        if (playerInventory.includes(item)) {
            storeBrowser("playerInventory",arrayRemove(playerInventory,item))
            currentLocationItems.push(item);
            storeBrowser(currentLocationInventory,currentLocationItems)
            nidScreenUpdate()
            nidFlavorText.textContent = "You set down the"+item+". "+itemFlavors[platonicItems.indexOf(item)];
        } else {
            nidFlavorText.textContent = "You have nothing of that sort to set down.";
        }
    } else
    if (event.includes("use")) {
        nidUse(event.replace("use",""))
    } else {
        nidFlavorText.textContent = "What? Submit 'help' for a list of possible actions."
    }
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

function nidUse(items) {
    var playerInventory = readBrowser("playerInventory")
    var itemsArray = items.split(",");
    itemsArray.sort();
    var a = 0;
    var hasItems = true;
    while (a < itemsArray.length) {
        if (playerInventory.includes(itemsArray[a])) {
            a = a + 1;
        } else {
            hasItems = false;
            break;
        }
    }
    alert(hasItems)
    if (hasItems = true) {
        switch(itemsArray.toString()) {
            case " candle":
                nidUseCandle();
                break;
            default:
                nidFlavorText.textContent = "Nothing happens. Typo?";
                break;
            }
    } else {
        nidFlavorText.textContent = "You don't appear to have all of those.";
    }
}

///nidUse functions
// for candle, it's a little toggle
function nidUseCandle() {
    var candleLit = readBrowser("candleLit");
    if (candleLit) {
        storeBrowser("candleLit",false);
        nidFlavorText.textContent = "You put out the candle. Smoke trails from the wick as your surroundings darken.";
    } else {
        storeBrowser("candleLit",true);
        nidFlavorText.textContent = "You light the candle. It's a warm little star under a moonless, starless sky."
    }
}

//a function to bring client data to the proper blank slate
function nidSetUp() {
    //localStorage player info
    storeBrowser("playerInventory",[" key"])
    storeBrowser("playerCoords","0,0")
    //localStorage location inventories
    storeBrowser("riverShoreInventory",[" broken boat"]) //0
    storeBrowser("watermillInventory",[" hard pod"," cauldron"]) //1
    storeBrowser("gnarledTreeInventory",[" book"]) //2
    storeBrowser("farmPlotInventory",[" hoe"," trowel"," watering can"," small seeds"," large seeds"," elongated seeds"," pale bulb"," rain gauge"]) //3
    storeBrowser("northwardPathInventory",[]) //4
    storeBrowser("northeasternGrassesInventory",[" rake"," shovel"," scythe"]) //5
    storeBrowser("westernGateInventory",[]) //6
    storeBrowser("westwardPathInventory",[]) //7
    storeBrowser("cabinInventory",[" candle"," medallion"," knife"," coin pouch",]) //8
    storeBrowser("eastwardPathInventory",[]) //9
    storeBrowser("easternGateInventory",[]) //10
    storeBrowser("southwesternGrassesInventory",[]) //11
    storeBrowser("southwardPathInventory",[]) //12
    storeBrowser("southeasternGrassesInventory",[]) //13
    storeBrowser("altarInventory",[" jewel"]) //14
    //localStorage item info
    storeBrowser("candleLit",false)
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

//makes dealing with arrays easier.
function arrayRemove(array, value) { 
    return array.filter(function(ele){ 
        return ele != value; 
    });
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
