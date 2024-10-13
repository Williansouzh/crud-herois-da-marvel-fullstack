import React from "react";
import HeroItem from "./HeroItem";

type Hero = {
  id: number;
  name: string;
  abilities: string[];
  origin: string;
};

type HeroListProps = {
  heroes: Hero[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
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
