import React from "react";
import { useFormik } from 'formik';
import * as yup from "yup";


function FormikFormWithYup() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: yup.object({
            email: yup.string().email().required('This field is required.'),
            password: yup.string()
                .min(6, 'Password is too short.')
                .max(20, 'Password is too long.')
                .required('This field is required.')
    
        }
         )

    });

return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label>
                Enter Your Email
                <input type="text" id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}></input>
                {formik.errors.email ? <div>{formik.errors.email}</div> : ""}
            </label>
            <br />
            <br />
            <label>
                Enter Your Password
                <input type="password" id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}></input>
                {formik.errors.password ? <div>{formik.errors.password}</div> : ""}
            </label>
            <br />
            <input type="submit" />


        </form>

    </div>
);
}

export default FormikFormWithYup; 