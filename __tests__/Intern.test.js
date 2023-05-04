const Intern = require('../lib/intern');
const Employee = require('../lib/Employee');

describe("Intern class", () => {
    it("Can instantiate Intern instance", () => {
        const e = new Intern();
        expect(typeof (e)).toBe("object");
    });

    it("Can set school via constructor argument", () => {
        const testValue = "UCLA";
        const e = new Intern("Foo", 1, "test@test.com", testValue);
        expect(e.school).toBe(testValue);
    });

    it("getRole() should return \"Intern\"", () => {
        const testValue = "Intern";
        const e = new Intern("Foo", 1, "test@test.com", "UCLA");
        expect(e.getRole()).toBe(testValue);
    });

    it("Can get school via getSchool()", () => {
        const testValue = "Harvard";
        const e = new Intern("Foo", 1, "test@test.com", testValue);
        expect(e.getSchool()).toBe(testValue);
    });
});