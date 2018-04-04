import { nameMapping, getInitials } from "../../helpers/contactHelpers";
import { Contact, ContactData } from "../../components/contact/contact";
import { expect } from "chai";

describe("Contact helper functions", () => {
    describe("getInitials()", () => {
        it("should return empty string if given two empty strings", () => {
            var actual = getInitials("", "");
            var expected = "";
            expect(actual).to.equal(expected);
        });

        it("should return the first letters of given names", () => {
            var actual = getInitials("Chandler", "Bing");
            var expected = "CB";
            expect(actual).to.equal(expected);
        });

        it("should always return capital letters", () => {
            var actual = getInitials("monica", "geller");
            var expected = "MG";
            expect(actual).to.equal(expected);
        });

        it("should return one letter if only one name given", () => {
            var actual = getInitials("Ross", "");
            var expected = "R";
            expect(actual).to.equal(expected);
        });
    });

    describe("nameMapping()", () => {
        it("should add empty strings if no name given", () => {
            const contactArr : Array<ContactData> = [
                {id: 1, score: 55, name: ""},
                {id: 2, score: 65, name: ""},
                {id: 3, score: 25, name: ""}
            ];
            const expected : Array<Contact> = [
                {id: 1, score: 55, name: "", firstName: "", lastName: ""},
                {id: 2, score: 65, name: "", firstName: "", lastName: ""},
                {id: 3, score: 25, name: "", firstName: "", lastName: ""}
            ];
            const actual : Array<Contact> = nameMapping(contactArr);
            expect(actual).to.deep.equal(expected);
        });

        it("should split the names at first and last", () => {
            const contactArr : Array<ContactData> = [
                {id: 1, score: 55, name: "Rachel Green"},
                {id: 2, score: 65, name: "Joey Tribiani"},
                {id: 3, score: 25, name: "Chandler Bing"}
            ];
            const expected : Array<Contact> = [
                {id: 1, score: 55, name: "Rachel Green", firstName: "Rachel", lastName: "Green"},
                {id: 2, score: 65, name: "Joey Tribiani", firstName: "Joey", lastName: "Tribiani"},
                {id: 3, score: 25, name: "Chandler Bing", firstName: "Chandler", lastName: "Bing"}
            ];
            const actual : Array<Contact> = nameMapping(contactArr);
            expect(actual).to.deep.equal(expected);
        });

        it("should grab only first and last names", () => {
            const contactArr : Array<ContactData> = [
                {id: 1, score: 55, name: "Little Miss Muffit"},
                {id: 2, score: 65, name: "My Pet Dragon"},
                {id: 3, score: 25, name: "Dish and The Spoon"}
            ];
            const expected : Array<Contact> = [
                {id: 1, score: 55, name: "Little Miss Muffit", firstName: "Little", lastName: "Muffit"},
                {id: 2, score: 65, name: "My Pet Dragon", firstName: "My", lastName: "Dragon"},
                {id: 3, score: 25, name: "Dish and The Spoon", firstName: "Dish", lastName: "Spoon"}
            ];
            const actual : Array<Contact> = nameMapping(contactArr);
            expect(actual).to.deep.equal(expected);
        });
    });
});