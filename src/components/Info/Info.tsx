import { MOCK_GENTLEMEN } from "../../mocks/MOCK_GENTLEMEN";
import { Gentlemen } from "../Gentlemen/Gentlemen";

export function Info() {
  return (
    <>
      {MOCK_GENTLEMEN.map((characters) => (
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
