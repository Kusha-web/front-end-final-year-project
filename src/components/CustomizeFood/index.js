import {
  Stepper,
  Step,
  StepLabel,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  FormLabel,
} from "@mui/material";
import { Box, useTheme, IconButton } from "@mui/material";
import { tokens } from "../theme";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { multiStepContext } from "./stepContext";
import { useContext, useState } from "react";
import plainRoti from "./images/roti.png";
import tandooriRoti from "./images/tandoori_roti.png";
import rumaliRoti from "./images/rumali-roti.png";
import plainRice from "./images/plain_rice.png";
import friedRice from "./images/fried_rice.png";
import polao from "./images/polao.png";
import chocolatePastry from "./images/pastry.png";
import croissant from "./images/croissant.png";
import strawberry from "./images/strawberry.png";
import applepie from "./images/apple-pie.png";
import cherrypie from "./images/cherrypie.png";
import chocolatepie from "./images/chocolatepie.png";

const First = () => {
  const { setStep, customizeData, setCustomizeData } = useContext(multiStepContext);
  console.log(customizeData);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleDelete = (chipToDelete) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setCustomizeData({ ...customizeData, ingredients: chips });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setChips([...chips, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <TextField
            label="Dish Name"
            value={customizeData["dishname"]}
            style={{ width: "400px" }}
            onChange={(e) =>
              setCustomizeData({ ...customizeData, dishname: e.target.value })
            }
          />
        </Box>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
          marginTop="20px"
        >
          <TextField
            label="Description"
            value={customizeData["description"]}
            onChange={(e) =>
              setCustomizeData({
                ...customizeData,
                description: e.target.value,
              })
            }
            multiline
            rows={7}
            variant="outlined"
            style={{ width: "400px" }}
          />
          {/* <TextareaAutosize label="Description" style={{ width: "400px", height: "200px", backgroundColor: `${colors.primary[400]}`, color: "white" }} /> */}
        </Box>
        <FormControl>
          <h3>SPICE LEVEL</h3>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) =>
              setCustomizeData({ ...customizeData, spicelevel: e.target.value })
            }
          >
            <FormControlLabel value="hot" control={<Radio />} label="Hot" />
            <FormControlLabel
              value="sizzling"
              control={<Radio />}
              label="Sizzling"
            />
            <FormControlLabel
              value="medium"
              control={<Radio />}
              label="Medium"
            />
          </RadioGroup>
        </FormControl>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="ADD INGREDIENTS LABEL"
              value={inputValue}
              onChange={handleInputChange}
            />
          </form>
          <Stack direction="row" spacing={1}>
            {chips.map((chip) => (
              <Chip
                key={chip}
                label={chip}
                onDelete={() => handleDelete(chip)}
              />
            ))}
          </Stack>
        </Box>
      </div>
      <IconButton
        style={{ borderRadius: "10px", marginTop: "20px" }}
        onClick={() => setStep(2)}
      >
        Next
      </IconButton>
    </div>
  );
};

const Rice = () => {
  const { customizeData, setCustomizeData } = useContext(multiStepContext);
  console.log(customizeData);
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">RICE SELECTION</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e) =>
          setCustomizeData({ ...customizeData, ricebread: e.target.value }) }
      >
        <FormControlLabel
          value="plainrice"
          control={<Radio />}
          label={
            <>
              <img
                src={plainRice}
                alt="Plain Rice"
                style={{ width: "200px", height: "200px" }}
              />
              Plain Rice
            </>
          }
        />
        <FormControlLabel
          value="friedrice"
          control={<Radio />}
          label={
            <>
              <img
                src={friedRice}
                alt="Fried Rice"
                style={{ width: "200px", height: "200px" }}
              />
              Fried Rice
            </>
          }
        />
        <FormControlLabel
          value="polao"
          control={<Radio />}
          label={
            <>
              <img
                src={polao}
                alt="Polao"
                style={{ width: "200px", height: "100px" }}
              />
              Polao
            </>
          }
        />
      </RadioGroup>
    </FormControl>
  );
};

const Roti = () => {
  const { customizeData, setCustomizeData } = useContext(multiStepContext);
  console.log(customizeData);
  return (
    <FormControl onChange={console.log("change")}>
      <FormLabel id="demo-radio-buttons-group-label">ROTI SELECTION</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={ (e) =>
          setCustomizeData({ ...customizeData, ricebread: e.target.value }) }
      >
        <FormControlLabel
          value="plainroti"
          control={<Radio />}
          label={
            <>
              <img
                src={plainRoti}
                alt="Plain Roti"
                style={{ width: "200px", height: "200px" }}
              />
              Plain Roti
            </>
          }
        />
        <FormControlLabel
          value="tandooriroti"
          control={<Radio />}
          label={
            <>
              <img
                src={tandooriRoti}
                alt="Tandoori Roti"
                style={{ width: "200px", height: "200px" }}
              />
              Tandoori Roti
            </>
          }
        />
        <FormControlLabel
          value="rumaliiroti"
          control={<Radio />}
          label={
            <>
              <img
                src={rumaliRoti}
                alt="Rumali Roti"
                style={{ width: "200px", height: "100px" }}
              />
              Rumali Roti
            </>
          }
        />
      </RadioGroup>
    </FormControl>
  );
};

const Second = () => {
  const { setStep, customizeData, setCustomizeData } =
    useContext(multiStepContext);
  function renderBreadOptions() {
    if (bread === "rice") return <Rice />;
    else if (bread === "roti") return <Roti />;
  }

  const [bread, setBread] = useState("");
  console.log(bread);
  const handleChange = (event) => {
    setBread(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rice And Bread</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bread}
          label="Rice And Bread"
          onChange={handleChange}
        >
          <MenuItem value="rice">Rice</MenuItem>
          <MenuItem value="roti">Roti</MenuItem>
          <MenuItem value="paratha">Paratha</MenuItem>
          <MenuItem value="bread">Bread</MenuItem>
        </Select>
      </FormControl>
      {renderBreadOptions()}
      <IconButton
        style={{ borderRadius: "10px", marginTop: "20px" }}
        onClick={() => setStep(1)}
        color="secondary"
      >
        Back
      </IconButton>
      <IconButton
        style={{ borderRadius: "10px", marginTop: "20px" }}
        onClick={() => setStep(3)}
        color="red"
      >
        Next
      </IconButton>
    </div>
  );
};

const Pastries = () => {
  const { customizeData, setCustomizeData } = useContext(multiStepContext);
  console.log(customizeData);
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Pastries</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e) =>
          setCustomizeData({ ...customizeData, desert: e.target.value })
        }
      >
        <FormControlLabel
          value="Chocolate pastry"
          control={<Radio />}
          label={
            <>
              <img
                src={chocolatePastry}
                alt="Plain Roti"
                style={{ width: "230px", height: "200px" }}
              />
              Chocolate
            </>
          }
        />
        <FormControlLabel
          value="croissant"
          control={<Radio />}
          label={
            <>
              <img
                src={croissant}
                alt="Tandoori Roti"
                style={{ width: "250px", height: "200px" }}
              />
              Croissant
            </>
          }
        />
        <FormControlLabel
          value="strawberry pastry"
          control={<Radio />}
          label={
            <>
              <img
                src={strawberry}
                alt="Rumali Roti"
                style={{ width: "200px", height: "200px" }}
              />
              Strawberry
            </>
          }
        />
      </RadioGroup>
    </FormControl>
  );
};

const Pie = () => {
  const { customizeData, setCustomizeData } = useContext(multiStepContext);
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Pie</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e) =>
          setCustomizeData({ ...customizeData, desert: e.target.value })
        }
      >
        <FormControlLabel
          value="apple pie"
          control={<Radio />}
          label={
            <>
              <img
                src={applepie}
                alt="Plain Roti"
                style={{ width: "230px", height: "200px" }}
              />
              Apple Pie
            </>
          }
        />
        <FormControlLabel
          value="cherry pie"
          control={<Radio />}
          label={
            <>
              <img
                src={cherrypie}
                alt="Tandoori Roti"
                style={{ width: "250px", height: "200px" }}
              />
              Cherry Pie
            </>
          }
        />
        <FormControlLabel
          value="chocolate pie"
          control={<Radio />}
          label={
            <>
              <img
                src={chocolatepie}
                alt="Rumali Roti"
                style={{ width: "200px", height: "200px" }}
              />
              Chocolate Pie
            </>
          }
        />
      </RadioGroup>
    </FormControl>
  );
};

const Third = () => {
  function renderDesertOptions() {
    if (desert === "pastry") return <Pastries />;
    else if (desert === "pie") return <Pie />;
  }
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
  const [desert, setDesert] = useState("");
  console.log(desert);

  const handleChange = (event) => {
    setDesert(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Desert Options</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={desert}
          label="Rice And Bread"
          onChange={handleChange}
        >
          <MenuItem value="pastry">Pastries</MenuItem>
          <MenuItem value="pie">Pie</MenuItem>
          <MenuItem value="icecream">Ice Cream</MenuItem>
        </Select>
      </FormControl>
      {renderDesertOptions()}
      <IconButton
        style={{ borderRadius: "10px", marginTop: "20px" }}
        onClick={() => setStep(2)}
        color="secondary"
      >
        Back
      </IconButton>
      <IconButton
        style={{ borderRadius: "10px", marginTop: "20px" }}
        onClick={() => submitData()}
        color="secondary"
      >
        Order
      </IconButton>
    </div>
  );
};

const CustomizeFood = () => {
  const { currentStep, finalData } = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <First />;
      case 2:
        return <Second />;
      case 3:
        return <Third />;
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create Order</h1>
      <Stepper
        style={{ width: "100%" }}
        activeStep={currentStep - 1}
        alternativeLabel
      >
        <Step>
          <StepLabel key="Dish Selection">Dish Selection</StepLabel>
        </Step>
        <Step>
          <StepLabel>Rice and Bread Options</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dessert Selection</StepLabel>
        </Step>
      </Stepper>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "50px" }}
      >
        {showStep(currentStep)}
      </div>
    </div>
  );
};

export default CustomizeFood;
