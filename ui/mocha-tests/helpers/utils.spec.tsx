import { includes } from "../../helpers/utils";
import { expect } from "chai";

describe("Utility helper functions", () => {
    describe("includes()", () => {
        it("should return true if substring is empty", () => {
            var actual = includes("little bow peep", "");
            var expected = true;
            expect(actual).to.equal(expected);
        });

        it("should return true if substring is in searching string", () => {
            var actual = includes("little bow peep", "bow");
            var expected = true;
            expect(actual).to.equal(expected);
        })

        it("should return false if substring is not in searching string", () => {
            var actual = includes("little bow peep", "cow");
            var expected = false;
            expect(actual).to.equal(expected);
        });
    });
});