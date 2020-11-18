import React from "react";
import { useFormik } from 'formik';


function FormikForm() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate: (values) => {
            let error = {};
            if (!values.email)
                error.email = "Email is required"
            if (!values.password)
                error.password = "Password is required"
            return error;

        }

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

export default FormikForm; 