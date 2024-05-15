/* eslint-disable react/prop-types */
import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

const CheckBox = ({ check, label,}) => {
  const [checked, setChecked] = useState(check)
  return (
    <FormControlLabel
      control={<Checkbox sx={{ color: "#102C57" }} name={label} checked={checked} onChange={() => setChecked(prevState => !prevState)}/>}
      label={label}
    />
  );
};

export default CheckBox;
