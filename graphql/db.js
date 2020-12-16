 export let people = [
    {
    id: 1,
    name: "nicolas",
    age:18
},
{   id:2,
    name: "seok",
    age:54
}
];

export const getpeople = ()=>people

export const getByid = id => {
    const filteredPeople = people.filter(person => person.id === id)
    return filteredPeople[0];
}

export const deletePeople = id => {
    const cleanedPeople = people.fileter(person=> person.id === id)
    if(people.length > cleanedPeople.length){
        people = cleanedPeople;
        return true;
    }else{
        return false;
    }
}

