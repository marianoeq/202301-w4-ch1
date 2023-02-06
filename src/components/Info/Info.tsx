import { mock_gentlemens } from "../../mocks/mock_gentlemens";
import { Gentlemen } from "../Gentlemen/Gentlemen";

export function Info() {
  return (
    <>
      {mock_gentlemens.map((characters) => (
        <Gentlemen
          id={characters.id}
          picture={characters.picture}
          name={characters.name}
          profession={characters.profession}
          status={characters.status}
          twitter={characters.twitter}
          selected={false}
          alternativeText={characters.alternativeText}
        ></Gentlemen>
      ))}
    </>
  );
}
