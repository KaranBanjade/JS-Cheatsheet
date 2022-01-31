const scores = [999,898,678,35,32,13,12,11,10];
const highscore = Math.max(...scores);
const lowscore = Math.min(...scores);

const[gold,last, ...everyonerest] = scores;


const user = {
    email: "asfkjas",
    password: "saknfnasf",
    firstName: "kjansf",
    lastName: "kjabsfk",
    born: 1999,
    died: 1998,
    bio: "lansj asfjnasn asnfasl fas f kaf lakflasknfkas",
    city: "kiasfnas",
    state:"lnafjasnf"
}

const user = {
    email: "karan@alskn",
    firstName: "Karan",
    lastName: "Bajaf",
    born: 1999,
    city: "kiakisrlasnsfnas",
    state:"liiklaskf"
}

const{email, firstName, lastName, city, bio} = user
const {emai, firstName, died = "NOT"} = user2;
