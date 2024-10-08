import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import ReactDiffViewer from 'react-diff-viewer'
import styles from "./styles.module.scss";

const convertToJson = line => {
  // Replace the hashrockets and nil values with colons and null
  const formattedLine = line.replace(/"=>"/g, '":"').replace(/"=>/g, '":').replace(/":nil/g, '":null');
  const unorderedObject = JSON.parse(formattedLine);
  const orderedObject = Object.keys(unorderedObject).sort().reduce(
    (obj, key) => { 
      obj[key] = unorderedObject[key]; 
      return obj;
    }, 
    {}
  );

  return JSON.stringify(orderedObject, null, 2);
}

const DiffResults = ({ diff }) => {
  const [expected, actual] = diff
      .trim()
      .split("\n")
      .map((line) => convertToJson(line.substring(1))
  );

  const styles = {
    contentText: {
      textAlign: 'left'
    },
    wordDiff: {
      padding: 0
    }
  }

  return (
    <ReactDiffViewer 
      styles={styles} 
      oldValue={expected} 
      newValue={actual} 
      splitView={true}
    />
  );
}

const ExampleDiff = `-{"uid"=>"darrick@dickens.test", "id"=>"018da041-b5ec-fa09-96f0-321f202f038c", "name"=>"Donn Sporer", "email"=>"darrick@dickens.test", "provider"=>"email", "allow_password_change"=>true, "created_at"=>"2024-02-13T05:17:57.483+03:00", "company_id"=>"018da041-b5e8-9578-1a42-797ada705d66", "terms_of_service_accepted_at"=>nil, "privacy_policy_accepted_at"=>nil, "roles"=>nil}
+{"provider"=>"email", "uid"=>"darrick@dickens.test", "id"=>"018da041-b5ec-fa09-96f0-321f202f038c", "name"=>"Donn Sporer", "email"=>"darrick@dickens.test", "allow_password_change"=>false, "created_at"=>"2024-02-13T05:17:57.483+03:00", "company_id"=>"018da041-b5e8-9578-1a42-797ada705d66", "privacy_policy_accepted_at"=>nil, "terms_of_service_accepted_at"=>nil, "roles"=>{}}`

const DiffForm = () => {
  const [diff, setDiff] = useState(ExampleDiff);
  const [step, setStep] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(2)
    // Handle the submission of the diff string here
    console.log(diff); // For debugging purposes only
  };
  
  const handleClear = () => {
    setStep(1);
    setDiff(null);
  }

  return (
    <Stack className={styles.container} gap={1}>
      {step == 1 ? (
       <>
         <TextField
          sx={{ width: "100%" }}
          label="Paste your Ruby Hash here straight from the console. Preface with a '-' for the expected value and a '+' for the actual value."
          placeholder={ExampleDiff}
          multiline
          rows={20}
          value={diff}
          onChange={(event) => setDiff(event.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={diff == null}
        >
          Compare
        </Button>
       </> ) : (
        <>
          <DiffResults diff={diff} />
          <Button
            variant="contained"
            color="primary"
            onClick={handleClear}
          >
            Clear
          </Button>
        </>
      )
      }
      
    </Stack>
  );
};

export default DiffForm;
