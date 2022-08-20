import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import CheckCircle from "@material-ui/icons/Done";
import Clock from "@material-ui/icons/AccessTime";
import HorizontalRule from "@material-ui/icons/Remove";
import StepConnector from "@material-ui/core/StepConnector";
import roundDetail from "./RoundDetail";
import Round from "./Round";
import { Box, StepButton } from "@material-ui/core";
// import HorizontalNonLinearStepper from "./HorizontalNonLinearStepper";

// style

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useStepperIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#cc9a25",
  },
  completed: {
    backgroundColor: "#146322",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

// Stepper Icon
function StepperIcon(props) {
  const classes = useStepperIconStyles();
  const active = roundDetail.round[props.icon - 1].active;
  const completed = roundDetail.round[props.icon - 1].completed;
  // const { active, completed } = {,roundDetail.round[props.icon -1].active};

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {active ? <Clock /> : completed ? <CheckCircle /> : <HorizontalRule />}
    </div>
  );
}


StepperIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

function HorizontalNonLinearStepper(props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        nonLinear
        activeStep={props.currentStep}
        connector={<ColorlibConnector />}
        alternativeLabel
      >
        {roundDetail.round.map((label, index) => (
          <Step key={index}>
            {/* <Step key={index} completed={label.completed} active={label.active}> */}
            <StepButton onClick={props.setCurrentStep(index)}>
              <StepLabel StepIconComponent={StepperIcon}>
                {label.name}
              </StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default function StepperDemo() {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(roundDetail.activeRound);
  function handleclick(step) {
    console.log(step);
    setCurrentStep(step + 1);
  }

  useEffect(() => {}, [currentStep]);
  return (
    <div>
      {/* stepper */}
      <HorizontalNonLinearStepper
        setCurrentStep={handleclick}
        currentStep={currentStep}
        sx={{ width: "100%" }}
      />
      {/* round detail  */}
      <div>
        <div>
          <div className={classes.instructions}>
            <Round round={roundDetail.round[currentStep - 1]} />
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
