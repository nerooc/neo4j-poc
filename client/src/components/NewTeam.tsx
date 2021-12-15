//@ts-nocheck
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createNewTeam } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultValues = {
  name: "",
  image_url: "",
};

export const NewTeam = ({ getTeams }) => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await createNewTeam(formValues);
      setFormValues(defaultValues);
      await getTeams();
      toast(`${formValues.name} has been added!`);
    } catch (e) {
      toast("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="space-between" direction="column">
        <Grid style={{ margin: "15px 0" }} item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
            sx={{ margin: "10px 0" }}
            fullWidth
          />
        </Grid>
        <Grid style={{ margin: "15px 0" }} item>
          <TextField
            id="img-url-input"
            name="image_url"
            label="Image URL"
            type="text"
            value={formValues.image_url}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Button
          style={{ margin: "15px 0" }}
          variant="contained"
          color="primary"
          type="submit"
          sx={{ margin: "10px 0" }}
        >
          Submit
        </Button>
      </Grid>
      <ToastContainer />
    </form>
  );
};
