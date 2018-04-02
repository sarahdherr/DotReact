export function includes(str : string, subStr : string) {
    return str.toLowerCase().indexOf(subStr.toLowerCase()) != -1;
}

export const BASE_URL : string = "https://shielded-everglades-49151.herokuapp.com";