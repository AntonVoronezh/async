// https://jsonplaceholder.typicode.com/

document.querySelector('#load').addEventListener('click', load);

function load() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
        .then(response => {
            // console.log('response', response);
            return response.json();
        })
        .then(data => {
            // console.log('data', data);
            const html = data.map(elem => {
                return '<li>' + elem.name + '</li>';
            })
            // console.log('html', html);
            // console.log('html', html.join(' '));
            document.querySelector('#list').innerHTML = html.join(' ');
            
        })

}