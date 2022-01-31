// Regular Destructuring
function fullName(user){
    const {firstName,lastName} = user;
    return `${firstName} ${lastName}`;
}
 
//Parameter Destructuring
function fullName({firstName,lastName="Blank"}){
    return `${firstName} ${lastName}`;
}

const movies = [
    {
        title: "lkasf",
        score:90,
        year: 1990
    },
    {
        title: "karn",
        score:99,
        year: 2002
        },
        {
            title: "kishore",
            score:95,
            year: 1997
        },
        {
            title: "sap",
            score:50,
            year: 1998
        }
    ]

movies.filter((movie)=>movie.score >= 90);
movies.filter((movie)=>movie.year >= 1999);

//regular destructuring
movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})

//parameter Destructuring
movies.map(({title, score, year}) => {
    return `${title} (${year}) is rated ${score}`
})