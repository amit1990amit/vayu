import React from "react";
import { Modal, Box } from "@mui/material";

type ModalContainerProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalContainer = (props: ModalContainerProps) => {
  const { open, onClose, children } = props
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 400,
          margin: "100px auto",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: 24,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default ModalContainer;
