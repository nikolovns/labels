import { Button } from "@mui/material";
import { useState } from "react";
import { useModalControl } from "../hooks/modal-controls";

import SmallModal from "../modals/SmallModal";

import AnimalForm from "./AnimalForm";



function AddAnimal(): JSX.Element {
  const { open, handleOpen, handleClose } = useModalControl();

  return (
    <div>

      <Button onClick={handleOpen}>Add Animal</Button>
      <SmallModal handleClose={handleClose} open={open}><AnimalForm /></SmallModal>

    </div>
  )
}

export default AddAnimal