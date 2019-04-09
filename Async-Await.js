// https://jsonplaceholder.typicode.com/

document.querySelector('#load').addEventListener('click', load);

async function load() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    // fetch(url)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         const html = data.map(elem => {
    //             return '<li>' + elem.name + '</li>';
    //         })
    //         document.querySelector('#list').innerHTML = html.join(' ');
            
    //     })

    const response = await fetch(url);

    const data = await response.json();

    const html = data.map(elem => '<li>' + elem.name + '</li>');

    document.querySelector('#list').innerHTML = html.join(' ');
}