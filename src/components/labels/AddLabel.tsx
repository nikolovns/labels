import { Button } from "@mui/material";
import { useModalControl } from "../hooks/modal-controls";
import SmallModal from "../modals/SmallModal";
import LabelForm from "./LabelForm";

export type AnimalProps = {
  animalId?: string
}

function AddLabel({ animalId }: AnimalProps): JSX.Element {
  const { open, handleOpen, handleClose } = useModalControl();

  return (
    <div>
      <Button onClick={handleOpen}>add label</Button>
      <SmallModal handleClose={handleClose} open={open}><LabelForm animalId={animalId} /></SmallModal>
    </div>

  );
}

export default AddLabel;