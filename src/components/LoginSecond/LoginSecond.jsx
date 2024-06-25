import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { trackerPrev, trackerNext, addData } from "../../redux/reducer/reducer";
import { useSelector } from "react-redux";

const LoginSecond = () => {
  const { addressLine1, addressLine2, city, phone, state, zipCode } =
    useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    addressLine1: Yup.string().required("Address Line 1 is required"),
    addressLine2: Yup.string().required("Address Line 2 is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string()
      .matches(/^\d{6}$/, "Zip Code should be valid (6 digits)")
      .required("Zip Code is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);

    let existingData = JSON.parse(localStorage.getItem("data")) || [];
    const newData = {
      ...existingData,
      ...values,
    };

    dispatch(addData(newData));
    setSubmitting(false);
    dispatch(trackerNext(3));
  };

  const handlePrev = () => {
    dispatch(trackerPrev(1));
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              addressLine1: addressLine1,
              addressLine2: addressLine2,
              city: city,
              state: state,
              zipCode: zipCode,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, errors }) => (
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="addressLine1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address Line 1
                  </label>
                  <Field
                    type="text"
                    id="addressLine1"
                    name="addressLine1"
                    autoComplete="address-line1"
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                      errors.addressLine1 ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="addressLine1"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="addressLine2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address Line 2
                  </label>
                  <Field
                    type="text"
                    id="addressLine2"
                    name="addressLine2"
                    autoComplete="address-line2"
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                      errors.addressLine2 ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="addressLine2"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <Field
                    type="text"
                    id="city"
                    name="city"
                    autoComplete="city"
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <Field
                    type="text"
                    id="state"
                    name="state"
                    autoComplete="state"
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                      errors.state ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Zip Code
                  </label>
                  <Field
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    autoComplete="zip-code"
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                      errors.zipCode ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="zipCode"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    className="group relative w-[45%] h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    onClick={handlePrev}
                  >
                    Prev
                  </button>
                  <button
                    type="submit"
                    className="group relative w-[45%] h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting || !isValid}
                  >
                    Next
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginSecond;
