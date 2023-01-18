import { Animal } from "@prisma/client";
import { api } from "../../utils/api";

import AnimalItem from "./AnimalItem";

function AnimalsList(): JSX.Element {
  const { data } = api.animalRouter.listOfAnimal.useQuery();

  return (
    <div>
      <h1>List of all animals</h1>
      {
        data?.map((animal: Animal) => <AnimalItem key={animal.id} {...animal} />)
      }
    </div>
  )
}

export default AnimalsList