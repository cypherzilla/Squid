let data = [
    {
        name: 'Montero',
        age: '39',
        job: 'Musician'
    
    },
    {
        name: 'Moon Young',
        age: '24',
        job: 'Bartender'
    },
    {
        name: 'Ali',
        age: '32',
        job: 'Construction Worker'
    
    },
    {
        name: 'Elena',
        age: '20',
        job: 'Waitress'
    },
    {
        name: 'Mr. Nice',
        age: '69',
        job: 'Director'
    },
    {
        name: 'Ada',
        age: '891',
        job: 'Software Developer'
    },
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return (
        '<div>' + item.name + ' ' + '<br>' + item.age + ' years old' + '<br>' + item.job + '</div>'
    );
});

// let details = data.map((item) => {
//     return (
//         `<div>{$item.name}</div>`
//     );
// });


info.innerHTML = details.join('\n')