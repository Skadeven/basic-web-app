import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });
    test('should return name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Skadi"
          ));
    });
    test('should return right answer of adding two numbers', () => {
        const query = "What is 8 plus 5?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "13"
          ));
    });
    test('should return largest number', () => {
        const query = "Which of the following numbers is the largest: 91, 19, 70?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "91"
          ));
    });
    test('should return a-b', () => {
        const query = "What is 66 minus 64?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "2"
          ));
    });
});