// Client -> Server -> DataBase -> Server -> Client

console.log('Client: Хочу получить список пользователей');
console.log('-----');

const promice = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Server: Запрашиваю список пользователей в БД');
        console.log('-----');
        resolve();
    }, 1000);
});

promice.then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                const out = [{
                        uid: 'aaaaaa',
                        name: 'jjjjjjjj'
                    },
                    {
                        uid: 'bbbbbb',
                        name: 'ffffffff'
                    }
                ]
                console.log('DataBase: Формирую список пользователей', out);
                console.log('-----');
                resolve(out);
            }, 500);
        });
    })

    .then(function (dbUsers) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('Server: Трансформирую данные для пользователя');
                console.log('-----');
                const users = dbUsers.map(elem => {
                    return {
                        id: elem.uid,
                        fn: elem.name,
                        ts: Date.now()
                    }
                })
                reject('Произошла ошибка')
                resolve(users);
            }, 500);
        });
    })

    .then(function (users) {
        setTimeout(function () {
            console.log('Client: Получил данные и отображаю их', users);
        }, 1000)
    })

    .catch(function (error) {
        console.error(error);

    })

    .finally(function () {
        console.log('finally');

    })