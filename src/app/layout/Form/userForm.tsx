"use client";

import { Form, Field, useForm } from "react-final-form";
import useUserFormViewModel from "./form.view-model";
import "./style.css";
import Options from "@/app/components/options";

const UserForm = () => {
  const { validate, submitData, data, loading, isSubmitted, fetchError } =
    useUserFormViewModel();

  return (
    <div className="form">
      <h2 className="form-header">My form</h2>
      {!isSubmitted ? (
        <Form
          onSubmit={submitData}
          validate={validate}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-content">
                <div className="form-fields">
                  <Field name="firstName">
                    {({ input, meta }) => (
                      <div>
                        <div className="input-labels">
                          <label>First Name</label>
                          {meta.touched && meta.error && (
                            <span className="input-labels-error">
                              {meta.error}
                            </span>
                          )}
                        </div>
                        <input {...input} type="text" placeholder="John" />
                      </div>
                    )}
                  </Field>
                  <Field name="lastName">
                    {({ input, meta }) => (
                      <div>
                        <div className="input-labels">
                          <label>Last Name</label>
                          {meta.touched && meta.error && (
                            <span className="input-labels-error">
                              {meta.error}
                            </span>
                          )}
                        </div>
                        <input {...input} type="text" placeholder="Doe" />
                      </div>
                    )}
                  </Field>
                  <Field name="favoriteMovie">
                    {({ input, meta }) => (
                      <div>
                        <div className="input-labels">
                          <label>Favorite Star Wars Movie</label>
                        </div>
                        {loading ? (
                          <Options options={[]} disabled={loading} />
                        ) : !fetchError ? (
                          <Options
                            options={data.allFilms.films}
                            onChange={(value: string) => input.onChange(value)}
                            disabled={loading}
                          />
                        ) : (
                          <>
                            <span className="input-labels-error">
                              Error fetching data. Reload to try again.
                            </span>
                          </>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="form-buttons">
                  <button
                    onClick={(e) => {
                      handleSubmit();
                    }}
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          )}
        />
      ) : (
        <div className="form-finish">Thanks for submitting the form!</div>
      )}
    </div>
  );
};

export default UserForm;
