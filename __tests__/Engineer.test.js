describe("Engineer class", () => {
    it("Can instantiate Engineer instance", () => {
        const e = new Engineer();
        expect(typeof (e)).toBe("object");
    });

    it("Can set GitHub account via constructor argument", () => {
        const testValue = "GitHubUser";
        const e = new Engineer("Foo", 1, "test@test.com", testValue);
        expect(e.github).toBe(testValue);
    });

    it("getRole() should return \"Engineer\"", () => {
        const testValue = "Engineer";
        const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
        expect(e.getRole()).toBe(testValue);
    });

    it("Can get GitHub username via getGithub()", () => {
        const testValue = "GitHubUser";
        const e = new Engineer("Foo", 1, "test@test.com", testValue);
        expect(e.getGithub()).toBe(testValue);
    });
});