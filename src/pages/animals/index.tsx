import AnimalsList from "../../components/animals/AnimalsList"
import AddAnimal from "../../components/animals/AddAnimals"

function AnimalsPage(): JSX.Element {

  return (
    <>
      <AddAnimal />

      <AnimalsList />
    </>

  )

}

export default AnimalsPage