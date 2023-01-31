import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

function AddMovie() {
    const url = "";
    const schema = Yup.object().shape({
        name: Yup.string().required("Movie name is required"),
        rating: Yup.number().min(0, "Rating must be greater than 0")
            .required("Rating is required").integer("rating must be an integer"),
        genre: Yup.string().required("Genre is required"),
    });
    function submit(values) {
        Axios.post(url, {
            name: values.name,
            rating: values.rating,
            genre: values.genre,
        }).then((res) => {
            alert("Movie added successfully");
        });
    }
   

    return (
        <div className="maincontainer">
            <div>Add Movies</div>
            <Formik
                initialValues={{
                    name: "",
                    rating: "",
                    genre: ""
                }}
                onSubmit={(e) => submit(e)}
                validationSchema={schema}>

      
                {(props) => (
                    <div id="content">
                        <Form>
                            <div id="details">
                                <div className="input-box">
                                    <span className="details">Movie Name</span>
                                    <Field
                                        name="name"
                                        type="text"
                                        id="name"
                                        placeholder="Name"
                                    />
                                    <div className="error">
                                        <ErrorMessage name="name" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <span className="details">Movie Rating</span>
                                    <Field
                                        name="rating"
                                        type="number"
                                        id="rating"
                                        placeholder="Rating"
                                    />
                                    <div className="error">
                                        <ErrorMessage name="rating" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <span className="details">Genre</span>
                                    <Field
                                        name="genre"
                                        type="text"
                                        id="genre"
                                        placeholder="Genre"
                                    />
                                    <div className="error">
                                        <ErrorMessage name="genre" />
                                    </div>
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Register" />
                            </div>
                        </Form>
                    </div>
                )}
                </Formik>
        </div>
    );
}
export default AddMovie;
