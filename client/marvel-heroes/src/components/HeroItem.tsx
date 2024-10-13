import React from "react";
import {
  ButtonContainer,
  DeleteButton,
  EditButton,
  HeroDetails,
  HeroName,
  HeroCard,
} from "../styles/HeroItem.styles";

type Hero = {
  id: string;
  name: string;
  abilities: string[];
  origin: string;
};

type HeroItemProps = {
  hero: Hero;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const HeroItem: React.FC<HeroItemProps> = ({ hero, onEdit, onDelete }) => {
  return (
    <HeroCard>
      <HeroName>{hero.name}</HeroName>
      <HeroDetails>
        <p>
          <strong>Habilidades:</strong> {hero.abilities.join(", ")}
        </p>
        <p>
          <strong>Origem:</strong> {hero.origin}
        </p>
      </HeroDetails>
      <ButtonContainer>
        <EditButton onClick={() => onEdit(hero.id)}>Editar</EditButton>
        <DeleteButton onClick={() => onDelete(hero.id)}>Excluir</DeleteButton>
      </ButtonContainer>
    </HeroCard>
  );
};

export default HeroItem;
