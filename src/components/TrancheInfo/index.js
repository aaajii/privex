import { Field, Formik } from "formik";
import { useState } from "react";
import { Alert, Form } from "react-bootstrap";

import { BsFillInfoCircleFill } from "react-icons/bs";

import Currency from "../Forms/Currency";
import Decimal from "../Forms/Decimal";
import Dropdown from "../Forms/Dropdown";

import "./index.css";

function TrancheInfo() {
  const [formNumber, setFormNumber] = useState(1);
  return (
    <div>
      <h5 className="fw-bold">TRANCHE INFO</h5>
      <Alert variant="primary">
        <BsFillInfoCircleFill className="me-2" />
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
                  <Form.Label htmlFor={`input[${i}].name`} className="required">
                    Tranche Name
                  </Form.Label>
                  <Field
                    name={`input[${i}].name`}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="form-group col-sm-4 fw-bold mb-3">
                  <Form.Label
                    htmlFor={`input[${i}].facilityType`}
                    className="required"
                  >
                    Facility Type
                  </Form.Label>
                  <Field
                    name={`input[${i}].facilityType`}
                    className="form-control form-select"
                    as="select"
                    options={[
                      { value: "A", label: "Type A" },
                      { value: "B", label: "Type B" },
                      { value: "C", label: "Type C" },
                    ]}
                    component={Dropdown}
                  ></Field>
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label
                    htmlFor={`input[${i}].trancheAmount`}
                    className="required"
                  >
                    Tranche Amount
                  </Form.Label>
                  <Form.Text className="text-muted ms-3 fw-normal">
                    Please enter full value. Enter 1 Million as 1,000,000
                  </Form.Text>
                  <Field
                    name={`input[${i}].trancheAmount`}
                    className="form-control"
                    type="text"
                    unit="USD"
                    component={Currency}
                  />
                </div>

                <div className="form-group col-sm-3 fw-bold mb-3 pe-5">
                  <Form.Label
                    htmlFor={`input[${i}].maturityDate`}
                    className="required"
                  >
                    Maturity Date
                  </Form.Label>
                  <Field
                    name={`input[${i}].maturityDate`}
                    className="form-control"
                    type="date"
                  />
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label
                    htmlFor={`input[${i}].amountDrawn`}
                    className="required"
                  >
                    Tranche Amount Drawn
                  </Form.Label>
                  <Field
                    name={`input[${i}].amountDrawn`}
                    className="form-control"
                    type="text"
                    unit="USD"
                    component={Currency}
                  />
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label
                    htmlFor={`input[${i}].avgLife`}
                    className="required"
                  >
                    Indicative Average Life (Years)
                  </Form.Label>
                  <Field
                    name={`input[0].avgLife`}
                    className=""
                    type="number"
                    component={Decimal}
                  />
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label
                    htmlFor={`input[${i}].amountUndrawn`}
                    className="required"
                  >
                    Tranche Amount Undrawn
                  </Form.Label>
                  <Field
                    name={`input[${i}].amountUndrawn`}
                    className="form-control"
                    type="text"
                    unit="USD"
                    component={Currency}
                  />
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label
                    htmlFor={`input[${i}].marginType`}
                    className="required"
                  >
                    Margin (% p.a.)
                  </Form.Label>
                  <div className="input-group w-75">
                    <Field
                      name={`input[${i}].marginType`}
                      className="form-control form-select w-50"
                      as="select"
                      options={[
                        { value: "jibaro", label: "JIBARO" },
                        { value: "LLCD", label: "LLCD" },
                        { value: "QUOPI", label: "QUOPI" },
                      ]}
                      component={Dropdown}
                    ></Field>
                    <Field
                      name={`input[${i}].marginPercent`}
                      className="form-control ms-4 w-25"
                      type="text"
                    />
                  </div>
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label
                    htmlFor={`input[${i}].sellAmount`}
                    className="required"
                  >
                    Tranche Amount to Sell
                  </Form.Label>
                  <Form.Text className="text-muted ms-3 fw-normal">
                    Please enter full value. Enter 1 Million as 1,000,000
                  </Form.Text>
                  <Field
                    name={`input[${i}].sellAmount`}
                    className="form-control"
                    type="text"
                    unit="USD"
                    component={Currency}
                  />
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label
                    htmlFor={`input[${i}].commitmentFee`}
                    className="required"
                  >
                    Commitment Fee (% p.a.)
                  </Form.Label>
                  <div className="input-group w-25">
                    <Field
                      name={`input[${i}].commitmentFee`}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>

                <div className="form-group col-sm-6 fw-bold mb-3 pe-5">
                  <Form.Label
                    htmlFor={`input[${i}].rolloverDate`}
                    className="required"
                  >
                    Interest Rollover Date
                  </Form.Label>
                  <div className="row">
                    <div className="col-5">
                      <Field
                        name={`input[${i}].rolloverDate`}
                        className="form-control"
                        type="date"
                      />
                    </div>
                    <div className="col-7">
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
                    <BsFillInfoCircleFill className="ms-2" />
                  </Form.Label>
                  <Field
                    name={`input[${i}].interest`}
                    className="form-control"
                    type="text"
                    unit="USD"
                    component={Currency}
                  />
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
