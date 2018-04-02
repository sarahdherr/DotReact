export interface Contact {
    id : number,
    score : number,
    firstName? : string,
    lastName? : string,
    name : string,
    company? : {
        name : string,
        score : number
    },
    companyName? : string
}

export interface ContactData {
    id : number,
    score : number,
    name : string,
    company? : {
        name : string,
        score : number
    },
    companyName? : string
}