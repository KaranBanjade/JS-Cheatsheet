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

const titles = movies.map(function(movie){
    return movie.title.toUpperCase();
});