import { Box, Modal } from "@mui/material";

type ModalProps = {
  children: JSX.Element,
  handleClose: () => void,
  open: boolean
}

function SmallModal({ children, handleClose, open }: ModalProps): JSX.Element {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {children}
      </Box>
    </Modal>
  )
}

export default SmallModal;