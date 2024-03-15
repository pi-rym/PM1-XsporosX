// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });

const { Activity, Repository } = require("../scripts/index");

describe("La clase Activity", function () {
  it("Debe ser una clase", function () {
    const nuevaActividad = new Activity();
    expect(typeof nuevaActividad).toBe("object");
    expect(nuevaActividad instanceof Activity).toBe(true);
  });
});

describe("La clase Repository", function () {
  it("Debe ser una clase", function () {
    const repositorio = new Repository();
    expect(typeof repositorio).toBe("object");
    expect(repositorio instanceof Repository).toBe(true);
  });

  it("Debe tener el método createActivity", function () {
    const repositorio = new Repository();
    expect(repositorio.createActivity).toBeDefined();
    expect(typeof repositorio.createActivity).toBe("function");
  });
});
