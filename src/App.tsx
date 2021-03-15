import React, { useState } from 'react';
import './App.css';
import {
  LinkStatus,
  TextField,
  VNavigation,
  Stepper,
  StepStatus,
  Button,
  DataList,
  useDatalistStateConsumer,
  Alignment,
  FieldType,
  RowData,
} from 'otc-ui-component-library';
import { format as dateFnsFormat } from 'date-fns';

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

const dataListArgs = {
  multiRowsSelectable: true,
  rows: [
    { id: 'jon', name: 'Jon', online: 'N', cost: 1500 },
    { id: 'kara', name: 'Kara', online: 'Y', cost: 1400 },
    { id: 'gerard', name: 'Gerard', online: 'Y', cost: 1300 },
    { id: 4, name: 'Tim', online: 'N', cost: 1200 },
  ],
  columnConfigs: [
    { field: 'name' },
    { field: 'online', format: (v: string) => (v === 'Y' ? 'Yes' : 'No') },
    { field: 'cost', format: (v: any) => `$${v}`, alignment: Alignment.Right },
  ],
  rowConfigs: [
    {
      id: 'jon',
      hint: 'Pick this guy',
      initialSelected: true,
      keyboardShortcutKey: 'J',
    },
    {
      id: 'gerard',
      contextualHelp: { title: 'Notice', body: 'Developer/Investor' },
      initialSelected: true,
    },
    { id: 4, initialDisabled: true },
    { id: 'jon1', initialDisabled: true },
  ],
  focusFirstRowOnMount: true,
};

const tableArgs = {
  multiRowsSelectable: true,
  rows: [
    {
      id: 'jon',
      name: 'Jon',
      no: 9,
      date0: '2020-11-18T13:54:51+10:00',
      date1: '2020-11-18T13:54:51+10:00',
      date2: '2 to 4 days',
      cost: 1500,
    },
    {
      id: 'kara',
      name: 'Kara',
      no: 8,
      date0: '2020-09-18T13:52:51+10:00',
      date1: '2020-09-18T13:52:51+10:00',
      date2: 'Next day',
      cost: 1400,
    },
    {
      id: 'gerard',
      name: 'Gerard',
      no: 7,
      date0: '2020-01-18T13:54:51+10:00',
      date1: '2020-01-18T13:54:51+10:00',
      date2: '2 to 4 days',
      cost: 1300,
    },
    {
      id: 4,
      name: 'Tim B',
      no: 6,
      date0: '2020-09-18T13:52:51+10:00',
      date1: '2020-09-18T13:52:51+10:00',
      date2: 'Next day',
      cost: 1200,
    },
    {
      id: 'tim n',
      name: 'Tim N',
      no: 5,
      date0: '2020-08-18T13:52:51+10:00',
      date1: '2020-08-18T13:52:51+10:00',
      date2: 'Next day',
      cost: 1100,
    },
    {
      id: 'damon',
      name: 'Damon',
      no: 4,
      date0: '2020-07-18T13:52:51+10:00',
      date1: '2020-07-18T13:52:51+10:00',
      date2: '2 to 4 days',
      cost: 1000,
    },
    {
      id: 'nelson',
      name: 'Nelson',
      no: 3,
      date0: '2020-06-18T13:52:51+10:00',
      date1: '2020-06-18T13:52:51+10:00',
      date2: 'Next day',
      cost: 800,
    },
    {
      id: 'michael',
      name: 'Michael',
      no: 2,
      date0: '2020-05-18T13:52:51+10:00',
      date1: '2020-05-18T13:52:51+10:00',
      date2: '2 to 4 days',
      cost: 700,
    },
    {
      id: 'brett',
      name: 'Brett',
      no: 1,
      date0: '2020-12-18T13:52:51+10:00',
      date1: '2020-12-18T13:52:51+10:00',
      date2: '2 to 4 days',
      cost: 700,
    },
  ],
  columnConfigs: [
    { field: 'name', headerName: 'user name', fieldType: FieldType.String },
    {
      field: 'no',
      headerName: 'employee no',
      fieldType: FieldType.Number,
    },
    {
      field: 'date0',
      headerName: 'time',
      fieldType: FieldType.Date,
      format: (date: string) => dateFnsFormat(new Date(date), 'hh:mmaa'),
    },
    {
      field: 'date1',
      headerName: 'created at',
      fieldType: FieldType.Date,
      alignment: Alignment.Right,
    },
    {
      field: 'date2',
      headerName: 'delivery',
      fieldType: FieldType.String,
      alignment: Alignment.Right,
    },
    {
      field: 'cost',
      headerName: 'amount',
      fieldType: FieldType.Currency,
      alignment: Alignment.Right,
    },
  ],
  rowConfigs: [
    {
      id: 'jon',
      hint: 'Pick this guy',
      initialSelected: true,
      keyboardShortcutKey: 'J',
    },
    {
      id: 'gerard',
      contextualHelp: { title: 'Notice', body: 'Developer/Investor' },
      initialSelected: true,
    },
    { id: 4, initialDisabled: true },
    { id: 'jon1', initialDisabled: true },
  ],
  focusFirstRowOnMount: true,
};

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

  /*
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
  );*/

  /*
  return (
    <div style={{ width: 740, margin: '0 auto', marginTop: '100px' }}>
      <DataList {...dataListArgs} />
      <button>Click me</button>
    </div>
  );
*/

  let updatedRowConfig = dataListArgs.rowConfigs.map((item) => ({ ...item }));
  updatedRowConfig[0].initialSelected = undefined;
  updatedRowConfig[1].initialSelected = undefined;

  const datalistState: any = useDatalistStateConsumer();

  const annieClick = () => {
    console.log(
      '~~~ datalistState.current?.selectedRowIds=',
      datalistState.current?.selectedRowIds
    );
  };

  const rowClicked = (currentSelectedRowIds: any) => {
    console.log('annieannie');

    console.log(
      '$$$$$ rowClicked currentSelectedRowIds=',
      currentSelectedRowIds
    );
    console.log(
      '$$$$$ rowClicked datalistState.current?.selectedRowIds1=',
      datalistState.current?.selectedRowIds
    );
  };

  const tableHeaderClicked = (rows: any) => {
    console.log('onTableHeaderClicked');
    console.log('rows=', rows);
  };

  return (
    <div style={{ width: 740, margin: '0 auto' }}>
      <DataList
        {...dataListArgs}
        rowConfigs={updatedRowConfig}
        onRowClicked={rowClicked}
        ref={datalistState}
      />
      <button onClick={annieClick}>NextStep</button>
    </div>
  );

  // return (
  //   <div style={{ margin: '0 auto' }}>
  //     <DataList
  //       {...tableArgs}
  //       onRowClicked={rowClicked}
  //       onTableHeaderClicked={tableHeaderClicked}
  //       ref={datalistState}
  //     />
  //     <button onClick={annieClick}>NextStep</button>
  //   </div>
  // );
}

export default App;
