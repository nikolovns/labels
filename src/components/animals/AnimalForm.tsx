import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { TextField, Typography } from '@mui/material'
import { Stack, Button } from '@mui/material'
import { api } from "../../utils/api";

type AnimalForm = {
  id?: string,
  name: string,
  color: string,
  label?: string[]
}

function AnimalForm(): JSX.Element {
  const apiCtx = api.useContext();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<AnimalForm>();
  const onSubmit: SubmitHandler<AnimalForm> = animal => handleAddAnimal(animal);

  //add animal, refresh the list of animals
  const addAnimal = api.animalRouter.addAnimal.useMutation({
    async onSuccess() {
      await apiCtx.animalRouter.listOfAnimal.invalidate();
    }
  });

  const handleAddAnimal = (animal: AnimalForm) => {
    const { name, color } = animal;
    addAnimal.mutateAsync({ name, color })
    reset();
  }

  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Add Animal
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={'column'} spacing={3} sx={{ my: 2 }}>
          <TextField
            required
            id="name"
            label="Name"
            size="small"
            sx={{ marginBottom: '10px' }}
            {...register('name')}
          />

          <TextField
            required
            id="color"
            label="Color"
            size="small"
            sx={{ marginBottom: '10px' }}
            {...register("color")}
          />
        </Stack>

        <Button variant="contained" type="submit">Save</Button>
      </form>
    </>

  )

}

export default AnimalForm