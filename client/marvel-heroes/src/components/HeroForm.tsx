import React, { useState } from "react";
import {
  FormContainer,
  Input,
  SubmitButton,
  ErrorMessage,
} from "../styles/HeroForm.styles";

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
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !abilities || !origin) {
      setError("Todos os campos precisam ser preenchidos!");
      return;
    }

    setError(null);

    onSubmit({
      name,
      abilities: abilities.split(",").map((ability) => ability.trim()),
      origin,
    });

    setName("");
    setAbilities("");
    setOrigin("");
  };

  return (
    <FormContainer>
      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
        className="form"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Habilidades (separadas por vírgula)"
          value={abilities}
          onChange={(e) => setAbilities(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Origem"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton type="submit">Salvar</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default HeroForm;
