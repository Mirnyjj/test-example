const fromFormToServer = require("./fromFromToServer");

describe("fromFormToServer", () => {
  test("Отечественное физическое лицо", () => {
    const input = {
      isForeign: false,
      isJuridical: false,
      title: "Иван Иванов",
      tin: "1234567890",
    };
    const expected = {
      type: "foreign_physical",
      tin: "1234567890",
      name: "Иван Иванов",
      foreign_tin: null,
      company_title: null,
    };
    expect(fromFormToServer(input)).toEqual(expected);
  });

  test("Отечественное юридическое лицо", () => {
    const input = {
      isForeign: false,
      isJuridical: true,
      title: "ООО Ромашка",
      tin: "0987654321",
    };
    const expected = {
      type: "foreign_juridical",
      tin: "0987654321",
      name: null,
      foreign_tin: null,
      company_title: "ООО Ромашка",
    };
    expect(fromFormToServer(input)).toEqual(expected);
  });

  test("Иностранное физическое лицо", () => {
    const input = {
      isForeign: true,
      isJuridical: false,
      title: "John Doe",
      tin: "1234567890",
    };
    const expected = {
      type: "physical",
      tin: null,
      name: "John Doe",
      foreign_tin: "1234567890",
      company_title: null,
    };
    expect(fromFormToServer(input)).toEqual(expected);
  });

  test("Иностранное юридическое лицо", () => {
    const input = {
      isForeign: true,
      isJuridical: true,
      title: "ACME Corp.",
      tin: "0987654321",
    };
    const expected = {
      type: "juridical",
      tin: null,
      name: null,
      foreign_tin: "0987654321",
      company_title: "ACME Corp.",
    };
    expect(fromFormToServer(input)).toEqual(expected);
  });
});
