// const propmise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2)
//     }, 2000)
// })

// propmise.then(num => num * 2)
//     .catch(err => console.log(err))
//     .then(num => num * 2)
//     .finally(() => console.log('finally'))


class MyPromise {
    constructor(callback) {

        this._onCatch = null
        this._onFinally = null
        this._thenCbs = []
        this._isRejected = false

        function resolver(data) {

            if(this._isRejected) {
                return
            }

            this._thenCbs.forEach(cb => {
              data = cb(data)  
            })


            if(this._onFinally) {
                this._onFinally() 
            }
        }

        function rejecter(error) {
            this._isRejected = true

            if(this._onCatch) {
                this._onCatch(error)
            }

            if(this._onFinally) {
                this._onFinally() 
            }
        }

        callback(resolver.bind(this), rejecter.bind(this))
    }

    then(cb) {
        this._thenCbs.push(cb)
        return this
    }

    catch (cb) {
        this._onCatch = cb
        return this
    } 
    
    finally(cb) {
        this._onFinally = cb
        return this
    }
}

// --------------------------------------------------------

const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        // reject('Some errrrror')
        resolve(2)
    }, 1000)
})

promise.then(num => num * 2)
    .catch(err => console.error(err))
    .then(num => num * 2)
    .finally(() => console.log('finally'))
    .then(num => console.log('Done: ', num))