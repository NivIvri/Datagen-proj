'use strict';

import { utilService } from './util.service';

export const DbService = {
    query,
    get,
    remove,
    post,
    put,
    insert
};

const ID_FIELD = '_id';

function query(collectionName) {
    var collection = utilService.loadFromStorage(collectionName);
    if (!collection || !collection.length) {

        collection = [
            {
                "_id": "101a",
                "name": "watermelon",
                "desc": "Watermelon (Citrullus lanatus) is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit. A scrambling and trailing vine-like plant, it is a highly cultivated fruit worldwide, with more than 1,000 varieties. Watermelon is grown in favorable climates from tropical to temperate regions worldwide for its large edible fruit, which is a berry with a hard rind and no internal divisions, and is botanically called a pepo. The sweet, juicy flesh is usually deep red to pink, with many black seeds, although seedless varieties exist. The fruit can be eaten raw or pickled, and the rind is edible after cooking. It may also be consumed as a juice or as an ingredient in mixed beverages .Watermelons are thought to be native to northeastern Africa.[2] Wild watermelon seeds have been found in Uan Muhuggiag, a prehistoric site in Libya that dates to approximately 3500 BC.[3] Watermelons were domesticated in Egypt by 2000 BC, and sweet dessert watermelons spread across the Mediterranean world during Roman times",
                "price": 18,
                "isDone": false
            },
            {
                "_id": "102a",
                "name": "bread",
                "desc": "Bread is a staple food prepared from a dough of flour (usually wheat) and water, usually by baking. Throughout recorded history, it has been a prominent food in large parts of the world. It is one of the oldest human-made foods, having been of significant importance since the dawn of agriculture, and plays an essential role in both religious rituals and secular culture. Bread may be leavened by naturally occurring microbes (e.g. sourdough), chemicals (e.g. baking soda), industrially produced yeast, or high-pressure aeration which creates the gas bubbles that fluffs up bread. In many countries, commercial bread often contains additives to improve flavor, texture, color, shelf life, nutrition, and ease of production.",
                "price": 15,
                "isDone": false
            },
            {
                "_id": "103a",
                "name": "milk",
                "desc": "Milk is a nutrient-rich liquid food produced by the mammary glands of mammals As an agricultural product, dairy milk is collected from farm animals.Dairy farms produced around 730 million tonnes(800 million short tons) of milk in 2011, [5] from 260 million dairy cows.[6] India is the world's largest producer of milk, and is the leading exporter of skimmed milk powder, yet it exports few other milk products.[7][8] The ever-increasing rise in domestic demand for dairy products and a large demand-supply gap could lead to India being a net importer of dairy products in the future.[9] New Zealand, Germany and the Netherlands are the largest exporters of milk products.[10] China and Russia were the world's largest importers of milk and milk products until 2016 when both countries became self- sufficient, contributing to a worldwide glut of milk.[11] Throughout the world, more than six billion people consume milk and milk products.Between 750 and 900 million people live in dairy farming households",
                "price": 7,
                "isDone": false
            },
            {
                "_id": "104a",
                "name": "eggs",
                "desc": "An egg is the organic vessel containing the zygote in which an embryo develops until it can survive on its own, at which point the animal hatches. An egg results from fertilization of an egg cell. Most arthropods, vertebrates (excluding live-bearing mammals), and mollusks lay eggs, although some, such as scorpions, do not. Reptile eggs, bird eggs, and monotreme eggs are laid out of water and are surrounded by a protective shell, either flexible or inflexible. Eggs laid on land or in nests are usually kept within a warm and favorable temperature range while the embryo grows. When the embryo is adequately developed it hatches, i.e., breaks out of the egg's shell. Some embryos have a temporary egg tooth they use to crack, pip, or break the eggshell or covering.",
                "price": 25,
                "isDone": false
            },
            {
                "_id": "105a",
                "name": "fries",
                "desc": "French fries (North American English), chips (British English),[1] finger chips (Indian English),[2] French-fried potatoes, or simply fries are batonnet or allumette-cut[3] deep-fried potatoes, originating from either Belgium or France. They are prepared by cutting the potato into even strips, then drying and frying it, usually in a deep fryer. Most french fries are produced from frozen Russet potatoes.French fries are served hot, either soft or crispy, and are generally eaten as part of lunch or dinner or by themselves as a snack, and they commonly appear on the menus of diners, fast food restaurants, pubs, and bars. They are often salted and may be served with ketchup, vinegar, mayonnaise, tomato sauce, or other local specialties. Fries can be topped more heavily, as in the dishes of poutine or chili cheese fries. Chips can be made from sweet potatoes instead of potatoes. A baked variant, oven chips, uses less oil or no oil.[4]",
                "price": 30,
                "isDone": false
            },
            {
                "_id": "106a",
                "name": "water",
                "desc": "Water (chemical formula H2O) is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth's hydrosphere and the fluids of all known living organisms (in which it acts as a solvent[1]). It is vital for all known forms of life, even though it provides no calories or organic nutrients. Its chemical formula H2O, indicates that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds. The hydrogen atoms are attached to the oxygen atom at an angle of 104.45°.[2] Water is the name of the liquid state of H2O at standard conditions for temperature and pressu A number of natural states of water exist. It forms precipitation in the form of rain and aerosols in the form of fog. Clouds consist of suspended droplets of water and ice, its solid state. When finely divided, crystalline ice may precipitate in the form of snow. The gaseous state of water is steam or water vapor.",
                "price": 10,
                "isDone": false
            },
            {
                "_id": "107a",
                "name": "lemons",
                "desc": "The lemon (Citrus limon) is a species of small evergreen tree in the flowering plant family Rutaceae, native to Asia, primarily Northeast India (Assam), Northern Myanmar or China.The tree's ellipsoidal yellow fruit is used for culinary and non-culinary purposes throughout the world, primarily for its juice, which has both culinary and cleaning uses.[2] The pulp and rind are also used in cooking and baking. The juice of the lemon is about 5% to 6% citric acid, with a pH of around 2.2, giving it a sour taste. The distinctive sour taste of lemon juice makes it a key ingredient in drinks and foods such as lemonade and lemon meringue pie.",
                "price": 20,
                "isDone": false
            }
        ];
        utilService.storeToStorage(collectionName, collection);
    }
    return Promise.resolve(collection);
}

async function get(collectionName, id) {
    var collection = await query(collectionName);
    return collection.find(curr => curr[ID_FIELD] === id);
}

async function remove(collectionName, id) {
    //debugger; // eslint-disable-line no-debugger
    var collection = await query(collectionName);
    var idx = collection.findIndex(curr => curr[ID_FIELD] === id);
    if (idx === -1) throw new Error('something went wrong');
    collection.splice(idx, 1);

    utilService.storeToStorage(collectionName, collection);
    return Promise.resolve();
}

async function post(collectionName, item) {
    var collection = await query(collectionName);
    item[ID_FIELD] = utilService.makeId();
    collection.push(item);

    utilService.storeToStorage(collectionName, collection);
    return Promise.resolve(item);
}

async function put(collectionName, item) {
    var collection = await query(collectionName);
    let idx = collection.findIndex(curr => curr[ID_FIELD] === item[ID_FIELD]);
    if (idx === -1) throw new Error('something went wrong');
    collection[idx] = item;

    utilService.storeToStorage(collectionName, collection);
    return Promise.resolve(item);
}

async function insert(collectionName, items) {
    var collection = await query(collectionName);
    items.forEach(curr => curr[ID_FIELD] = utilService.makeId());
    collection.push(...items);

    utilService.storeToStorage(collectionName, collection);
    return Promise.resolve();
}
