import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { memo } from "react";

const DeleteButton = memo(() => {
  return (
    <Button>
      <DeleteIcon color="disabled" />
    </Button>
  );
});

export default DeleteButton;
