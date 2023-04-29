const Manager = require("../lib/Manager");
const Employee = require('../lib/Employee');

describe("Manager class", () => {
    it("Can instantiate Engineer instance", () => {
        const e = new Manager();
        expect(typeof (e)).toBe("object");
    });

    it("Can set Office number via constructor argument", () => {
        const testValue = "12";
        const e = new Manager("Foo", 1, "test@test.com", testValue);
        expect(e.officeNumber).toBe(testValue);
    });

    it("getRole() should return \"Manager\"", () => {
        const testValue = "Manager";
        const e = new Manager("Foo", 1, "test@test.com", 12);
        expect(e.getRole()).toBe(testValue);
    });

    it("Can get office number via getGithub()", () => {
        const testValue = 12;
        const e = new Manager("Foo", 1, "test@test.com", testValue);
        expect(e.getOfficeNumber()).toBe(testValue);
    });
});