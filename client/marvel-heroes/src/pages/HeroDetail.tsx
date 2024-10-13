import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import HeroForm from "../components/HeroForm";
import { updateHero } from "../store/heroSlice";
import { updateHero as updateHeroService } from "../services/heroService";
import {
  HeroDetailContainer,
  HeroDetailHeader,
  BackButton,
} from "../styles/pages/HeroDetails.styles"; // Import styles

const HeroDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hero = useSelector((state: RootState) =>
    state.heroes.heroes.find((h) => h.id === id)
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
    <HeroDetailContainer>
      <HeroDetailHeader>Editando Herói: {hero.name}</HeroDetailHeader>

      {/* Button to go back to the list of heroes */}
      <BackButton onClick={() => navigate("/")}>Voltar para a Lista</BackButton>

      {/* Hero Form for editing */}
      <HeroForm onSubmit={handleUpdateHero} initialData={hero} />
    </HeroDetailContainer>
  );
};

export default HeroDetail;
