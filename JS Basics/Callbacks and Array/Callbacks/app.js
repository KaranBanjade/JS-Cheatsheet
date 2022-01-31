// const numbers = [1,2,3,4,5,6,,7,8,9];
// numbers.forEach(function(el)){
//     if(el%2==0){
//         console.log(el);
//     }
// }

const movies = [
    {
        title: 'hello',
        score: 95
    },
    {
        title: 'hi',
        score: 90
    },
    {
        title: 'hola',
        score: 80
    },
    {
        title: 'adios',
        score: 100
    }
];
movies.forEach(function(movie) {
    console.log(`${movie.title} = ${movie.score}`);
})