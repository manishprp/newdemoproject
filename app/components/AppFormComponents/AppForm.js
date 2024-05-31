import {Formik} from 'formik';
import React from 'react'; //handleChange, handleBlur, handleSubmit, values

function AppForm({children, validationSchema, initialValues, onSubmit}) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}>
      {() => <>{children}</>}
    </Formik>
  );
}


export default AppForm;
