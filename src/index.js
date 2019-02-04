import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
//import React, { Component } from "react";
//import { render } from "react-dom";

import Form from "react-jsonschema-form";
//import pncschema from "./schema.1.json";
import pncschema from "./schema.json";
import pncuiSchema from "./uiSchema.json";
import axios from "axios"

let OutputJSON = '';
const formData = {
  job_parameters: {
    pncStudy: {
      pncMockInputTable: "",
      cohortGroup: {
        startDate: "02/01/2017"
      }
    }
  },
  job_information: {
    submitted_timestamp: new Date().toISOString()
  }
};



//export default Output;
// const onSubmit = ({ formData }) => {
//   console.log("Data submitted: ", formData);
//   //saveAs(formData, filename+".txt");
//   // fs.writeFileSync('student-2.json', JSON.stringify(formData));
// };



class App extends Component {
  
 

  

  handleSubmit(event) {
    // OutputJSON = JSON.stringify(event.formData);
    //console.log(formData);
    // console.log(OutputJSON);
    // document.getElementById("outJson").innerText = OutputJSON;

    //event.preventDefault();

    const auth = {
      "username" : "ppspusr",
      "password" : "Ppsprod1"
    };

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }

    // axios.post('http://cdts99hdfe04p.rxcorp.com:3993/submitFtpaReportRequest', { auth }, {headers})
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
  }
  handleChange(event){
    OutputJSON = JSON.stringify(event.formData);
    document.getElementById("outJson").innerText = OutputJSON;
  }
  render() {
    return (
      <div>
        <Form 
          schema={pncschema}
          uiSchema={pncuiSchema}
          onSubmit={this.handleSubmit}
          formData={formData}
          onChange={this.handleChange}
          liveValidate          
        />  
      </div>
    );
  }
}

//export default App;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
