import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import styles from "../TodoItem/TodoItem.module.css";
import { Button } from "@mui/material";

const CreateButton = ({ create }) => (
  <div className={styles.createBtn}>
    {create === false ? (
      <Button>
        <AddCircleIcon color="primary" fontSize="large" />
      </Button>
    ) : (
      <Button>
        <CancelIcon color="primary" fontSize="large" />
      </Button>
    )}
  </div>
);

export default CreateButton;
