
//  User

export async function login(email = "", password = ""){

}

export async function register(email = "", password = ""){

}

//  Groups

export async function getGroups(userId = ""){

}

export async function createGroup(userId = ""){

}

export async function joinGroup(userId = "", groupId = ""){

}

export async function leaveGroup(userId = "", groupId = ""){

}

//  Products

export async function getProducts(userId = "", groupId = ""){

}

export async function addProduct(groupId = "", product = {}){
    // product = {
    //     id: genUUID(),
    //     groupId: "",
    //     name: "",
    //     marked: false
    // }
}

export async function markProduct(groupId = "", productId = ""){

}

export async function unmarkProduct(groupId = "", productId = ""){

}