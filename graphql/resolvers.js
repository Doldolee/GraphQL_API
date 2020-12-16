import {getByid, getpeople, deletePeople} from "./db.js"

const resolvers = {
    Query : {
        people: ()=>getpeople(),
        person: (_, {id})=>getByid(id)
        
    }
}

export default resolvers