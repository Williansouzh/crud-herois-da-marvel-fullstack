import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // URL do backend NestJS
});

export const getHeroes = async () => {
  const response = await api.get("/heroes");
  return response.data;
};

export const createHero = async (hero: {
  name: string;
  abilities: string[];
  origin: string;
}) => {
  const response = await api.post("/heroes", hero);
  return response.data;
};

export const updateHero = async (
  id: string,
  hero: { name: string; abilities: string[]; origin: string }
) => {
  const response = await api.put(`/heroes/${id}`, hero);
  return response.data;
};

export const deleteHero = async (id: string) => {
  const response = await api.delete(`/heroes/${id}`);
  return response.data;
};
