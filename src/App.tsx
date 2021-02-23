import React, { useState } from 'react';
import './App.css';
import {
  LinkStatus,
  TextField,
  VNavigation,
  Stepper,
  StepStatus,
  Button,
} from 'otc-ui-component-library';

const longStepList = [
  {
    label: 'Step0',
    status: StepStatus.InProgress,
  },
  {
    label: 'Step1',
    status: StepStatus.NotStarted,
  },
  {
    label: 'Step2',
    status: StepStatus.NotStarted,
  },
  {
    label: 'Step3',
    status: StepStatus.Disabled,
  },
  {
    label: 'Step4',
    status: StepStatus.NotStarted,
  },
  {
    label: 'Step5',
    status: StepStatus.Disabled,
  },
  {
    label: 'Step6',
    status: StepStatus.NotStarted,
  },
  {
    label: 'Step7',
    status: StepStatus.NotStarted,
  },
  {
    label: 'Step8',
    status: StepStatus.NotStarted,
  },
  {
    label: 'Step9',
    status: StepStatus.NotStarted,
  },
  {
    label: 'Step10',
    status: StepStatus.NotStarted,
  },
  {
    label: 'Step11',
    status: StepStatus.NotStarted,
  },
  {
    label: 'Step12',
    status: StepStatus.NotStarted,
  },
];

function App() {
  /*  return (
    <div>
      TextField
      <TextField />
      <hr />
      <hr />
      VNavigation:
      <VNavigation
        links={[
          {
            label: 'Getting started',
            url: 'https://auspost.com.au',
          },
          {
            label: 'Transfer details',
            url: 'https://auspost.com.au',
          },
          {
            label: 'Sender details',
            url: 'https://auspost.com.au',
          },
          {
            label: 'Receiver details',
            status: LinkStatus.Active,
            url: 'https://auspost.com.au',
          },
          {
            label: 'Self-declared questions',
            url: 'https://auspost.com.au',
          },
          {
            label: 'Review & confirm',
            url: 'https://auspost.com.au',
          },
        ]}
      />
    </div>
  );*/

  let initialSteps = [...longStepList];
  const [steps, setSteps] = useState(initialSteps);

  const setCurrentAndSubsequentSteps = (currentStepIndex: number) => {
    const updatedSteps = steps.map((step, index) => {
      return index === currentStepIndex
        ? { ...step, status: StepStatus.InProgress }
        : index > currentStepIndex && step.status !== StepStatus.Disabled
        ? { ...step, status: StepStatus.NotStarted }
        : { ...step, status: StepStatus.Completed };
    });

    setSteps(updatedSteps);
  };

  return (
    <>
      <div className='container1'>
        <Stepper steps={steps} onStepClicked={setCurrentAndSubsequentSteps} />
        <Button
          label='Go to Step 2'
          type='button'
          onClick={() => setCurrentAndSubsequentSteps(2)}
        />
        <Button
          label='Go to Step 11'
          type='button'
          onClick={() => setCurrentAndSubsequentSteps(11)}
        />
      </div>
    </>
  );
}

export default App;
