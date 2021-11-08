//import storageService from './storage.service'
//let gProducts
//export const productService = {
//    query,
//    getById,
//    remove,
//    save,
//    getNextOrPrevId,
//    getEmptyContact
//}

//_createProduct()
//function _createProduct() {
//    var products = storageService.loadFromStorage('product')
//    if (!products || !products.length) {
//        products =[
//            {
//              "_id": "101a",
//              "name": "watermelon",
//              "desc": "watermelon",
//              "price": 18,
//              "isDone": "false"
//            },
//            {
//              "_id": "102a",
//              "name": "bread",
//              "desc": "bread",
//              "price": 15,
//              "isDone": "false"
//            },
//            {
//              "_id": "103a",
//              "name": "milk",
//              "desc": "milk",
//              "price": 7,
//              "isDone": "false"
//            },
//            {
//              "_id": "104a",
//              "name": "Eggs",
//              "desc": "Eggs",
//              "price": 25,
//              "isDone": "false"
//            },
//            {
//              "_id": "105a",
//              "name": "Fries",
//              "desc": "Fries",
//              "price": 30,
//              "isDone": "false"
//            },
//            {
//              "_id": "106a",
//              "name": "water",
//              "desc": "water",
//              "price": 10,
//              "isDone": "false"
//            },
//            {
//              "_id": "107a",
//              "name": "Lemons",
//              "desc": "Lemons",
//              "price": 20,
//              "isDone": "false"
//            }
//          ]
          
        
//    }
//    gProducts = products;
//    _saveContactsToStorge();
//}

//function query(filterBy = '') {
//    var product = gProducts;
//    if (filterBy.txt) {
//        const regex = new RegExp(filterBy.txt, 'i');
//        product = product.filter(product => regex.test(product.vendor))
//    }
//    if (filterBy.minSpeed) {
//        product = product.filter(product => product.maxSpeed >= filterBy.minSpeed)
//    }

//    //if (filterBy.pageIdx >= 0) {
//    //    const startIdx = filterBy.pageIdx * PAGE_SIZE
//    //    product = product.slice(startIdx, startIdx + PAGE_SIZE)
//    //}
//    return (product);
//}

//function getNextOrPrevId(currId, nextOrPrev) {
//    const idx = gProducts.findIndex((product) => {
//        if (product._id === currId) {
//            return product
//            //if (nextOrPrev === 1 && gProducts.length > idx + 1) {

//            //    return gProducts[idx + 1]
//            //}
//            //else return gProducts[idx - 1]
//        }
//    })


//    return gProducts[idx + nextOrPrev]?._id
//}

//function getById(productId) {
//    const product = gProducts.find(product => product._id === productId)
//    return (product)
//}



//function remove(productId) {
//    const idx = gProducts.findIndex(product => product._id === productId)
//    if (idx === -1) {
//        return Promise.reject('Cannot remove Contact')
//    }
//    gProducts.splice(idx, 1)
//    return _saveContactsToStorge()
//}


//function save(product) {
//    if (product._id) {
//        const idx = gProducts.findIndex(currContact => currContact._id === product._id)
//        gProducts[idx] = product;
//    } else {
//        product._id = _makeId()
//        gProducts.push(product)
//    }
//    _saveContactsToStorge()
//    return product;

//}

//function getEmptyContact() {
//    const user = {
//        name: "",
//        email: "",
//        phone: "",
//        moves: [],
//        color: '',
//        coins: 100
//    }
//    return user
//}


//function _makeId(length = 5) {
//    var txt = '';
//    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//    for (let i = 0; i < length; i++) {
//        txt += possible.charAt(Math.floor(Math.random() * possible.length));
//    }
//    return txt;
//}

//function _saveContactsToStorge() {
//    storageService.saveToStorage('product', gProducts);
//}
