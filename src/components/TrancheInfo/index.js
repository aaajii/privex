import { Field, Formik } from "formik";
import { useState } from "react";
import { Alert, Form } from "react-bootstrap";

function TrancheInfo() {
  const [formNumber, setFormNumber] = useState(1);
  return (
    <div>
      <h5 className="fw-bold">TRANCHE INFO</h5>
      <Alert variant="primary">
        For each tranche in your facility, please enter details below, then
        press 'Save/Next' button.
      </Alert>
      <Formik
        initialValues={{
          input: [
            { name: "", facilityType: "", trancheAmount: "", maturityDate: "" },
          ],
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleSubmit, values }) => (
          <>
            {[...Array(formNumber)].map((_, i) => (
              <Form className="row" key={i}>
                <div
                  className={`w-100 ${
                    i !== 0 ? "d-flex" : "d-none"
                  } justify-content-end`}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setFormNumber(formNumber - 1);
                    }}
                    className="btn btn-warning me-3"
                  >
                    Delete
                  </button>
                </div>
                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label htmlFor={`input[${i}].name`}>
                    Tranche Name
                  </Form.Label>
                  <Field
                    name={`input[${i}].name`}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label htmlFor={`input[${i}].facilityType`}>
                    Facility Type
                  </Form.Label>
                  <Field
                    name={`input[${i}].facilityType`}
                    className="form-control form-select"
                    as="select"
                  >
                    <option value="A">Type A</option>
                    <option value="B">Type B</option>
                    <option value="C">Type C</option>
                  </Field>
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label htmlFor={`input[${i}].trancheAmount`}>
                    Tranche Amount
                  </Form.Label>
                  <Form.Text className="text-muted ms-3 fw-normal">
                    Please enter full value. Enter 1 Million as 1,000,000
                  </Form.Text>
                  <div className="input-group">
                    <span className="input-group-text">USD</span>
                    <Field
                      name={`input[${i}].trancheAmount`}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label htmlFor={`input[${i}].maturityDate`}>
                    Maturity Date
                  </Form.Label>
                  <Field
                    name={`input[${i}].maturityDate`}
                    className="form-control"
                    type="date"
                  />
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label htmlFor={`input[${i}].amountDrawn`}>
                    Tranche Amount Drawn
                  </Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">USD</span>
                    <Field
                      name={`input[${i}].amountDrawn`}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label htmlFor={`input[${i}].avgLife`}>
                    Indicative Average Life (Years)
                  </Form.Label>
                  <Field
                    name={`input[${i}].avgLife`}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label htmlFor={`input[${i}].amountUndrawn`}>
                    Tranche Amount Undrawn
                  </Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">USD</span>
                    <Field
                      name={`input[${i}].amountUndrawn`}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label htmlFor={`input[${i}].amountUndrawn`}>
                    Margin (% p.a.)
                  </Form.Label>
                  <div className="input-group">
                    <Field
                      name={`input[${i}].amountUndrawn`}
                      className="form-control form-select"
                      as="select"
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                    </Field>
                  </div>
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label htmlFor={`input[${i}].sellAmount`}>
                    Tranche Amount to Sell
                  </Form.Label>
                  <Form.Text className="text-muted ms-3 fw-normal">
                    Please enter full value. Enter 1 Million as 1,000,000
                  </Form.Text>
                  <div className="input-group">
                    <span className="input-group-text">USD</span>
                    <Field
                      name={`input[${i}].sellAmount`}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label htmlFor={`input[${i}].commitmentFee`}>
                    Commitment Fee (% p.a.)
                  </Form.Label>
                  <div className="input-group">
                    <Field
                      name={`input[${i}].commitmentFee`}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label htmlFor={`input[${i}].rolloverDate`}>
                    Interest Rollover Date
                  </Form.Label>
                  <div className="row">
                    <div className="col-4">
                      <Field
                        name={`input[${i}].rolloverDate`}
                        className="form-control"
                        type="date"
                      />
                    </div>
                    <div className="col-8">
                      <Form.Check
                        type="checkbox"
                        name={`input[${i}].isConfirmed`}
                        className="fw-normal my-auto"
                        label="To be confirmed through QA"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label htmlFor={`input[${i}].interest`}>
                    Accrued Interest
                  </Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">USD</span>
                    <Field
                      name={`input[${i}].interest`}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <hr />
              </Form>
            ))}
            <div className="w-100 d-flex justify-content-between">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setFormNumber(formNumber + 1);
                }}
                className="btn btn-primary me-3"
              >
                + Tranche
              </button>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="btn btn-secondary me-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Please wait..." : "Submit"}
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}

export default TrancheInfo;
