import React, { useState } from "react";

type HeroFormProps = {
  onSubmit: (hero: {
    name: string;
    abilities: string[];
    origin: string;
  }) => void;
  initialData?: { name: string; abilities: string[]; origin: string };
};

const HeroForm: React.FC<HeroFormProps> = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [abilities, setAbilities] = useState(
    initialData?.abilities.join(", ") || ""
  );
  const [origin, setOrigin] = useState(initialData?.origin || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      abilities: abilities.split(",").map((ability) => ability.trim()),
      origin,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Habilidades (separadas por vírgula)"
        value={abilities}
        onChange={(e) => setAbilities(e.target.value)}
      />
      <input
        type="text"
        placeholder="Origem"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default HeroForm;
