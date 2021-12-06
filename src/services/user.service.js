import { storageService } from './async-storage.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
var gWatchedUser = null;

const USERS_KEY = 'users';

getUsers();

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getUsers, //new
    getById,
    remove,
    update,
    changeScore
}

window.userService = userService

async function getUsers() {
    try {
        let users = await storageService.query(USERS_KEY)
        if (!users || !users.length) {
            users = [
                {
                    "_id": "u101",
                    "fullName": "Lula Kula",
                    "userName": "lula@amdadi.com",
                    "password": "lula",
                    "isAdmin": true,
                    "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786774/avatars/avatar12_c2fk8k.jpg"
                },
                {
                    "_id": "u102",
                    "fullName": "Bela Mela",
                    "userName": "bela@amdadi.com",
                    "password": "bela",
                    "isAdmin": true,
                    "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786774/avatars/avatar1_ydl3ev.png"
                },
                {
                    "_id": "u103",
                    "fullName": "Zara Shara",
                    "userName": "zara@amdadi.com",
                    "password": "zara",
                    "isAdmin": true,
                    "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786774/avatars/avatar13_bd50y0.jpg"
                },
                {
                    "_id": "u104",
                    "fullName": "Nina Penina",
                    "userName": "zara@amdadi.com",
                    "password": "zara",
                    "isAdmin": true,
                    "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786774/avatars/avatar13_bd50y0.jpg"
                },
                {
                    "_id": "u105",
                    "fullName": "Jhon Snow",
                    "userName": "jhon@amdadi.com",
                    "password": "jhon",
                    "isAdmin": true,
                    "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar4_qnojew.png"
                }
                ,
                {
                    "_id": "u106",
                    "fullName": "Kuki Shuki",
                    "userName": "kuki@amdadi.com",
                    "password": "kuki",
                    "isAdmin": true,
                    "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar8_lfy71z.png"
                },
                {
                    "_id": "u107",
                    "fullName": "Bob Rob",
                    "userName": "bob@amdadi.com",
                    "password": "bob",
                    "isAdmin": true,
                    "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar11_zrmnuw.jpg"
                },
                {
                    "_id": "u108",
                    "fullName": "Tom Frog",
                    "userName": "tom@amdadi.com",
                    "password": "tom",
                    "isAdmin": true,
                    "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar2_znrytb.png"
                },
                {
                    "_id": "u109",
                    "fullName": "Muki Guki",
                    "userName": "muki@amdadi.com",
                    "password": "muki",
                    "isAdmin": true,
                    "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar7_z8e9gw.png"
                },
                {
                    "_id": "u110",
                    "fullName": "Lala Belala",
                    "userName": "lala@amdadi.com",
                    "password": "lala",
                    "isAdmin": true,
                    "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar6_vqrh3l.png"
                },
                {
                    "_id": "u111",
                    "fullName": "Mila Belila",
                    "userName": "mila@amdadi.com",
                    "password": "mila",
                    "isAdmin": true,
                    "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar3_m1dr5v.png"
                },
                {
                    "_id": "u112",
                    "fullName": "Yosi Bosi",
                    "userName": "yosi@amdadi.com",
                    "password": "yosi",
                    "isAdmin": true,
                    "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar9_fc6dnp.png"
                },
                {
                    "_id": "u113",
                    "fullName": "Roi Rosi",
                    "userName": "roi@amdadi.com",
                    "password": "roi",
                    "isAdmin": true,
                    "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar5_titi4p.png"
                }
            ];
            await storageService.postMany(USERS_KEY, users);
        }
        return users;
    } catch (err) {
        console.log(err, 'error in createUsers');
    }
}

async function getById(userId) {
    const user = await storageService.get('user', userId)
    gWatchedUser = user;
    return user;
}
function remove(userId) {
    return storageService.remove('user', userId)
}

async function update(user) {
    await storageService.put('user', user)
    if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
    return user;
}

async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    return _saveLocalUser(user)
}
async function signup(userCred) {
    userCred.score = 10000;
    const user = await storageService.post('user', userCred)
    return _saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

async function changeScore(by) {
    const user = getLoggedinUser()
    if (!user) throw new Error('Not loggedin')
    user.score = user.score + by || by
    await update(user)
    return user.score
}


function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}


(async () => {
    var user = getLoggedinUser()
    // Dev Helper: Listens to when localStorage changes in OTHER browser

    // Here we are listening to changes for the watched user (comming from other browsers)
    window.addEventListener('storage', async () => {
        if (!gWatchedUser) return;
        const freshUsers = await storageService.query('user')
        const watchedUser = freshUsers.find(u => u._id === gWatchedUser._id)
        if (!watchedUser) return;
        if (gWatchedUser.score !== watchedUser.score) {
            console.log('Watched user score changed - localStorage updated from another browser')
        }
        gWatchedUser = watchedUser
    })
})();