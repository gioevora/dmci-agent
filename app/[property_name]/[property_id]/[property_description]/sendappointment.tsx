import {
    Button,
    Select,
    SelectItem,
    Textarea,
    Checkbox,
    Input,
    Link,
    Divider,
} from "@heroui/react";
import axios from "axios";
import toast from "react-hot-toast";
import { LuCalendarRange } from "react-icons/lu";
import { ErrorMessage, Formik, Field, Form } from "formik";
import * as Yup from "yup";

interface InquiryFormProps {
    inquiry: Listings;
}

interface Listings {
    max_price: string;
    name: string;
    location: string;
    property: {
        name: string;
    }
}

const validationSchema = Yup.object().shape({
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    name: Yup.string().required("Full name is required"),
    type: Yup.string().required("Appointment type is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must contain only numbers")
        .length(11, "Phone number must be exactly 11 digits")
        .required("Phone number is required"),
    agreement: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions."
    ),
});

const viewing = [
    { key: 1, label: "Property Viewing", value: "viewing" },
    { key: 2, label: "Property Consultation", value: "consultation" },
];

const SendAppointment: React.FC<InquiryFormProps> = ({ inquiry }) => {
    const handleAppointmentSubmit = async (values: any, { resetForm }: any) => {
        try {
            await axios.post(
                "https://infinitech-testing5.online/api/user/request-viewing",
                values,
                {
                    headers: {
                        "User-ID": "01JGZN73V2Y5Y68SZ586PN9Y48",
                    },
                }
            );
            resetForm();
            toast.success("Appointment submitted successfully!");
        } catch (error) {
            toast.error("Error! Please Try Again!");
        }
    };

    const today = new Date().toISOString().split("T")[0];

    return (
        <div className="w-full p-6">
            <div className="flex items-center gap-2">
                <div className="bg-green-200 p-2 rounded-full text-green-800">
                    <LuCalendarRange size={48} />
                </div>
                <div>
                    <h1 className="text-2xl uppercase font-semibold">Book an On-Site Viewing</h1>
                    <p className="text-sm text-default-500 font-normal">
                        Fill out the fields below to send us your inquiry. Our team
                        will get back to you as soon as possible.
                    </p>
                </div>
            </div>
            <Divider className="my-4" />
            <Formik
                initialValues={{
                    user_id: "01JGZN73V2Y5Y68SZ586PN9Y48",
                    name: "",
                    phone: "",
                    email: "",
                    date: "",
                    time: "",
                    type: "",
                    status: "Pending",
                    message: "",
                    properties: inquiry.property.name,
                    agreement: false,
                }}
                validationSchema={validationSchema}
                onSubmit={handleAppointmentSubmit}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form className="flex flex-col gap-4">
                        <Field as={Input} name="name" label="Full Name" placeholder="e.g. Juan Pedro" />
                        <ErrorMessage className="text-red-500 text-sm" component="div" name="name" />

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col w-full">
                                <Field as={Input} name="email" label="Email" placeholder="e.g. email@gmail.com" />
                                <ErrorMessage className="text-red-500 text-sm" component="div" name="email" />
                            </div>
                            <div className="flex flex-col w-full">
                                <Field as={Input} name="phone" label="Phone Number" placeholder="e.g. 09924401097" />
                                <ErrorMessage className="text-red-500 text-sm" component="div" name="phone" />
                            </div>


                        </div>

                        <div className="flex gap-2">
                            <div className="flex flex-col w-full">
                                <Field as={Input} name="date" label="Date" type="date" min={today} />
                                <ErrorMessage className="text-red-500 text-sm" component="div" name="date" />
                            </div>
                            <div className="flex flex-col w-full">
                                <Field as={Input} name="time" label="Time" type="time" />
                                <ErrorMessage className="text-red-500 text-sm" component="div" name="time" />
                            </div>
                        </div>

                        <div>
                            <Field as={Select} name="type" label="Appointment For">
                                {viewing.map((option) => (
                                    <SelectItem key={option.label} value={option.label}>
                                        {option.label}
                                    </SelectItem>
                                ))}

                            </Field>
                            <ErrorMessage className="text-red-500 text-sm" component="div" name="type" />
                        </div>

                        <div>
                            <Field as={Textarea} name="message" label="Your Message to the Agent" placeholder="Leave us a message..." />
                            <ErrorMessage className="text-red-500 text-sm" component="div" name="message" />
                        </div>


                        <Field name="agreement" type="checkbox">
                            {({ field }: any) => (
                                <label className="flex items-center space-x-2">
                                    <Checkbox {...field} id="agreement" />
                                    <span>
                                        I agree to the{' '}
                                        <Link className="text-blue-500" href="/terms-and-conditions">
                                            terms and conditions
                                        </Link>
                                        .
                                    </span>
                                </label>
                            )}
                        </Field>
                        
                        <ErrorMessage className="text-red-500 text-sm" component="div" name="agreement" />

                        <Divider className="my-4" />
                        <Button size="lg" className="w-full" color="primary" disabled={isSubmitting} type="submit">
                            {isSubmitting ? "Submitting..." : "Submit Appointment"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SendAppointment;
