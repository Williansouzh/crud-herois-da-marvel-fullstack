import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setHeroes, addHero, updateHero, deleteHero } from "../store/heroSlice";
import {
  getHeroes,
  createHero,
  updateHero as updateHeroService,
  deleteHero as deleteHeroService,
} from "../services/heroService";
import HeroList from "../components/HeroList";
import HeroForm from "../components/HeroForm";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const heroes = useSelector((state: RootState) => state.heroes.heroes);
  const navigate = useNavigate();

  useEffect(() => {
    getHeroes().then((data) => dispatch(setHeroes(data)));
  }, [dispatch]);

  const handleCreateHero = (hero: {
    name: string;
    abilities: string[];
    origin: string;
  }) => {
    createHero(hero).then((data) => dispatch(addHero(data)));
  };

  const handleUpdateHero = (
    id: string,
    hero: { name: string; abilities: string[]; origin: string }
  ) => {
    updateHeroService(id, hero).then(() =>
      dispatch(updateHero({ id, hero: { id, ...hero } }))
    );
  };

  const handleDeleteHero = (id: string) => {
    deleteHeroService(id).then(() => dispatch(deleteHero(id)));
  };

  const handleEdit = (id: string) => {
    navigate(`/hero/${id}`);
  };

  return (
    <div>
      <h1>Lista de Heróis</h1>
      <HeroList
        heroes={heroes}
        onEdit={handleEdit}
        onDelete={handleDeleteHero}
      />
      <h2>Criar Novo Herói</h2>
      <HeroForm onSubmit={handleCreateHero} />
    </div>
  );
};

export default Home;
