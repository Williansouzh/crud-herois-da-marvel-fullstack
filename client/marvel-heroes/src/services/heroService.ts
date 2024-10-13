import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const mapHeroToFrontend = (hero: any) => ({
  ...hero,
  id: hero._id,
  _id: undefined,
});

const mapHeroesToFrontend = (heroes: any[]) => {
  return heroes.map(mapHeroToFrontend);
};

export const getHeroes = async () => {
  const response = await api.get("/heroes");
  return mapHeroesToFrontend(response.data);
};

export const createHero = async (hero: {
  name: string;
  abilities: string[];
  origin: string;
}) => {
  const response = await api.post("/heroes", hero);
  return mapHeroToFrontend(response.data);
};

export const updateHero = async (
  id: string,
  hero: { name: string; abilities: string[]; origin: string }
) => {
  const response = await api.put(`/heroes/${id}`, hero);
  return mapHeroToFrontend(response.data);
};

export const deleteHero = async (id: string) => {
  const response = await api.delete(`/heroes/${id}`);
  return response.data;
};
