const store = require('./store');

function addChat(users) {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user List');
    }

    const chat = {
        users: users,
    };

    return store.add(chat);
}

function listChats(userId) {
    return new Promise((resolve, reject) => {
        resolve(store.list(userId))
    })
}

module.exports = {
    addChat,
    listChats,
}