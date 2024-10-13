import React from "react";
import HeroItem from "./HeroItem";

type Hero = {
  id: string;
  name: string;
  abilities: string[];
  origin: string;
};

type HeroListProps = {
  heroes: Hero[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const HeroList: React.FC<HeroListProps> = ({ heroes, onEdit, onDelete }) => {
  return (
    <div>
      {heroes.map((hero) => (
        <HeroItem
          key={hero.id}
          hero={hero}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default HeroList;
