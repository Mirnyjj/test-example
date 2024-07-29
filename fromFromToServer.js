const fromFormToServer = (personInForm) => ({
  type: [
    personInForm.isForeign ? null : "foreign",
    personInForm.isJuridical ? "juridical" : "physical",
  ]
    .filter(Boolean)
    .join("_"),
  tin: personInForm.isForeign ? null : personInForm.tin,
  name: personInForm.isJuridical ? null : personInForm.title,
  foreign_tin: personInForm.isForeign ? personInForm.tin : null,
  company_title: personInForm.isJuridical ? personInForm.title : null,
});

console.log(
  fromFormToServer({
    isForeign: false,
    isJuridical: true,
    title: "ООО Ромашка",
    tin: "0987654321",
  })
);

module.exports = fromFormToServer;
