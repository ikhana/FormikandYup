import React from "react";
import { Formik } from 'formik';
import './App.css';
import FormikForm from './FormikForm';
import  FormikFormWithYup from "./FormikFormwithYup";

function App() {
  return (
    <div className="App">
      <FormikForm/>
      < FormikFormWithYup/>
      
    </div>
  );
}

export default App;
