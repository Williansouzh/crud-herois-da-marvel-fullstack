import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setHeroes, addHero, deleteHero } from "../store/heroSlice";
import {
  getHeroes,
  createHero,
  deleteHero as deleteHeroService,
} from "../services/heroService";
import HeroList from "../components/HeroList";
import Modal from "../components/HeroModal";
import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  HeroSection,
  SectionTitle,
  ButtonContainer,
  Button,
} from "../styles/pages/Home.styles";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const heroes = useSelector((state: RootState) => state.heroes.heroes);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getHeroes().then((data) => dispatch(setHeroes(data)));
  }, [dispatch]);

  const handleCreateHero = (hero: {
    name: string;
    abilities: string[];
    origin: string;
  }) => {
    createHero(hero).then((data) => dispatch(addHero(data)));
    setIsModalOpen(false); // Close the modal after submission
  };

  const handleDeleteHero = (id: string) => {
    deleteHeroService(id).then(() => dispatch(deleteHero(id)));
  };

  const handleEdit = (id: string) => {
    navigate(`/hero/${id}`);
  };

  return (
    <HomeContainer>
      <h1>Lista de Heróis</h1>
      <SectionTitle>Criar Novo Herói</SectionTitle>

      <ButtonContainer>
        <Button onClick={() => setIsModalOpen(true)}>Criar Herói</Button>
        <Button onClick={() => navigate("/")} disabled={heroes.length === 0}>
          Voltar para a Lista
        </Button>
      </ButtonContainer>

      <HeroSection>
        <HeroList
          heroes={heroes}
          onEdit={handleEdit}
          onDelete={handleDeleteHero}
        />
      </HeroSection>

      {/* Modal to create a hero */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateHero}
      />
    </HomeContainer>
  );
};

export default Home;
