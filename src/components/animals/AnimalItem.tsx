import { Button } from "@mui/material"
import { Animal, Label } from "@prisma/client"
import { useState } from "react"
import { useModalControl } from "../hooks/modal-controls"
import AddLabel from "../labels/AddLabel"

type AnimalList = {
  id: string;
  name: string;
  color: string;
  label?: Label[]
}

function AnimalItem(animal: AnimalList): JSX.Element {

  return (
    <div>
      <h3>name: {animal.name}</h3>
      <p>color: {animal.color}</p>

      <div>
        {
          animal.label?.map((label: Label) => {
            return (
              <span style={{ backgroundColor: label.color }} key={label.id}>{label.name}</span>
            )
          })
        }
      </div>

      <AddLabel animalId={animal.id} />
    </div>
  )
}

export default AnimalItem