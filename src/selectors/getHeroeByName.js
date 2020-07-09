const { heroes } = require("../data/heroes");

export const getHeroeByName = (name = "") => {
  if (name.trim() === "") {
    return [];
  }
  return heroes.filter((heroe) =>
    heroe.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );
};
