import {getByid, getpeople, deletePeople, addPeople} from "./db.js"
import {getMovies} from "./db2.js"

const resolvers = {
    Query : {
        people: ()=>getpeople(),
        person: (_, {id})=>getByid(id),
        getmovie:(_, {rating, limit})=>getMovies(limit, rating)

        
    },
    Mutation:{
        addPeople: (_, {name, age})=>addPeople(name,age),
        deletePeople: (_, {id})=>deletePeople(id)
    }
}

export default resolvers