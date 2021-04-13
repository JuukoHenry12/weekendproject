import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
//import SendIcon from '@material-ui/icons/Send';
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import { Block } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  field: {
    marginTop: 30,
    marginBottom: 20,
    display: Block,
  },
});
export default function Create() {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(false);
    if (title === "" && details === "") {
      setErrors(true);
    }
    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }
  };
  return (
    <Container sm="sm">
      <Typography color="textSecondary" variant="h6">
        Create Note
      </Typography>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="title "
          variant="outlined"
          color="secondary"
          fullWidth
          required
          className={classes.field}
          error={errors}
        />
        <TextField
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          label="Details "
          variant="outlined"
          color="secondary"
          className={classes.field}
          multiline
          rows={4}
          fullWidth
          required
          error={errors}
        />
        <FormControl>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={classes.field}
          >
            <FormControlLabel value="money" control={<Radio />} label="money" />
            <FormControlLabel
              value="remainder"
              control={<Radio />}
              label="Remainder"
            />
            <FormControlLabel value="todos" control={<Radio />} label="todos" />
          </RadioGroup>
        </FormControl>
        <br />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>

      {/* icons */}
      {/* <AcUnitOutlinedIcon color="secondary" fontSize="large"/>
      <AcUnitOutlinedIcon color="action" fontSize="small"/>
      <AcUnitOutlinedIcon color="error" fontSize="small"/> */}
    </Container>
  );
}
