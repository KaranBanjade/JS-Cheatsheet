const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
numbers.filter(n=>{
    return n>10;
})

movies = [
    {
        title: "karan",
        score: 90,
        year: 2002
    },
    {
        title: "kiran",
        score: 80,
        year: 2002
    },
    {
        title: "koran",
        score: 70,
        year: 2002
    },
    {
        title: "ksran",
        score: 60,
        year: 2002
    },
    {
        title: "kqran",
        score: 99,
        year: 2002
    },
    {
        title: "kdran",
        score: 90,
        year: 2002
    },
    {
        title: "kkran",
        score: 90,
        year: 2002
    },
    {
        title: "kkkran",
        score: 90,
        year: 2002
    }
]

const goodMovies = movies.filter(m=>m.score>80);
const badMovies =  movies.filter(m=>m.score<80);
const recentMovies = movies.filter(m=>m.year>0);