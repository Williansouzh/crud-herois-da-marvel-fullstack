import React from "react";

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
    <div>
      <h3>{hero.name}</h3>
      <p>Habilidades: {hero.abilities.join(", ")}</p>
      <p>Origem: {hero.origin}</p>
      <button onClick={() => onEdit(hero.id)}>Editar</button>
      <button onClick={() => onDelete(hero.id)}>Excluir</button>
    </div>
  );
};

export default HeroItem;
