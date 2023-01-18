import { Label } from "@prisma/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { api } from "../../utils/api";
import { AnimalProps } from "./AddLabel";

function LabelForm({ animalId }: AnimalProps): JSX.Element {

  const apiCtx = api.useContext();
  const labels = api.labelRouter.listOfLables.useQuery();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<Label>();
  const onSubmit: SubmitHandler<Label> = data => handleAddLabel(data);


  const addLabel = api.labelRouter.addLabel.useMutation({
    async onSuccess() {
      await apiCtx.animalRouter.invalidate();
      await apiCtx.labelRouter.invalidate();
    }
  })

  const handleAddLabel = (data: Label) => {
    const { name, color } = data;
    const labelId = labels.data?.find(item => item.name === name)
    const id = labelId?.id

    addLabel.mutateAsync({ id, name, color, animalId })
  }


  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Add Label
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
  );
}

export default LabelForm;