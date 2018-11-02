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
    expect(
      model.addTempObj({ title: "Google" }, { title: "Google" })
    ).toBeNull();
  });
  it("should be one argument", () => {
    const model = new Model();
    expect(model.addTempObj()).toBeNull();
  });
});
describe("Promise", () => {
  it("Should to come object", () => {
    const model = new Model();

    expect(model.promiseItem("string")).resolves.toMatchObject();
  });
  it("Should to come object", () => {
    const model = new Model();

    expect(model.promiseItem()).rejects.toThrow(new Error("error"));
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
