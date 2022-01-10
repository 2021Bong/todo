import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { memo } from "react";

const EditButton = memo(({ edit }) => {
  return edit === false ? (
    <Button>
      <EditIcon />
    </Button>
  ) : (
    <Button>
      <AutoAwesomeIcon />
    </Button>
  );
});

export default EditButton;
