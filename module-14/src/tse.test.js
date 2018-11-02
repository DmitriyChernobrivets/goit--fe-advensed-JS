import Model from "./components/Model";

describe("LocalStorage", () => {
  it("should be return string", () => {
    const model = new Model();
    expect(model.addTempObj({ title: "Google" })).toBe("Google");
  });
  it("should be undefined", () => {
    const model = new Model();
    expect(model.addTempObj({ prop: "string" })).toBeUndefined();
  });
  it("type should be object", () => {
    const model = new Model();
    expect(model.addTempObj([1])).toBeNull();
  });
  it("type should be object", () => {
    const model = new Model();
    expect(model.addTempObj("asd")).toBeNull();
  });
  it("type should be object", () => {
    const model = new Model();
    expect(model.addTempObj(123)).toBeNull();
  });
  it("should be one argument", () => {
    const model = new Model();
    expect(model.addTempObj({ title: "Google" }, 1, "asd")).toBeNull();
  });
  it("should be one argument", () => {
    const model = new Model();
    expect(model.addTempObj()).toBeNull();
  });
});
describe("Promise", () => {
  it("Should to come response", () => {
    const model = new Model();

    model
      .promiseItem("google.com")
      .then(data =>
        expect(data).toEqual(
          expect.objectContaining({
            title: "Google",
            description: expect.any(String),
            url: expect.any(String),
            image: expect.any(String)
          })
        )
      )
      .catch(err => {
        expect(err).not.toBeNull();
      });
  });
});

describe("Update Storage", () => {
  it("Shouldn't be empty", () => {
    const model = new Model();

    expect(model.updateStorage().length).toBeGreaterThan(0);
  });
  it("Should come some value in Storage", () => {
    const model = new Model();

    expect(model.removeStorageData()).toBeNull();
  });
});
