function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms)
    })
}

const p1 = sleep(1500).then(() => {
    // console.log('1500');
    return {
        name: 'sleep 1500'
    }
})

const p2 = sleep(3000).then(() => {
    // console.log('3000');
    return {
        name: 'sleep 3000'
    }
})

const p3 = sleep(4000).then(() => {
    // console.log('3000');
    return {
        name: 'sleep 4000'
    }
})

// Promise.race([p1, p2]).then(data => {
//     console.log('race', data);
// })

// Promise.all([p1, p2, p3]).then(data => {
//     console.log('all', data);
// })

async function start() {
    const dataRace = await Promise.race([p1, p2]);

    const dataAll = await Promise.all([p1, p2, p3]);

    console.log('dataRace', dataRace);
    console.log('dataAll', dataAll);
    
}

start();