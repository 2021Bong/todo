import { Checkbox } from "@mui/material";
import { memo } from "react";

const Confirmed = memo(({ id, updateStatus }) => {
  const onChecked = () => {
    updateStatus(id);
  };
  return <Checkbox onClick={onChecked}>Checkbox</Checkbox>;
});

export default Confirmed;
