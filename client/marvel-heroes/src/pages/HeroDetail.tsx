import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import HeroForm from "../components/HeroForm";
import { updateHero } from "../store/heroSlice";
import { updateHero as updateHeroService } from "../services/heroService";

const HeroDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hero = useSelector((state: RootState) =>
    state.heroes.heroes.find((h) => h.id === Number(id))
  );

  const handleUpdateHero = (heroData: {
    name: string;
    abilities: string[];
    origin: string;
  }) => {
    if (hero) {
      updateHeroService(hero.id, heroData).then(() => {
        dispatch(updateHero({ id: hero.id, hero: { ...hero, ...heroData } }));
        navigate("/");
      });
    }
  };

  if (!hero) {
    return <div>Herói não encontrado</div>;
  }

  return (
    <div>
      <h1>Editando Herói: {hero.name}</h1>
      <HeroForm onSubmit={handleUpdateHero} initialData={hero} />
    </div>
  );
};

export default HeroDetail;
