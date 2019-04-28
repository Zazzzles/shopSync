import FirebaseManager from './FirebaseManager'
//  User

export async function login(email = "", password = ""){
    try{
        await FirebaseManager.dologin(email, password)
        console.log("Login success");
        return {
            success: true,
            message: "User logged in"
        }
    }catch(err){
        console.log("Login failure");
        return {
            success: false,
            message: err.toString()
        }
    }
}

export async function register(email = "", password = ""){
    try{
        await FirebaseManager.doSignUp(email, password)
        console.log("Register success");
        return {
            success: true,
            message: "User account created"
        }
    }catch(err){
        console.log("Register failure");
        return {
            success: false,
            message: err.toString()
        }
    }
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