import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const sendEmail = (data, e) => {
    e.preventDefault();
    console.log(data);
    emailjs
      .sendForm(
        "service_lnurr49",
        "template_9ome84n",
        form.current,
        "VLAQUZLnGgSl4c0GU"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-2/5">
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        {/* <form ref={form} onSubmit={sendEmail} onSubmit={handleSubmit(handleRegistration)}> */}
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          className="border-solid border-2 border-gray-800"
          {...register("name", { required: "Name is required" })}
        />
        {errors?.name && errors.name.message}
        <label>E-mail</label>
        <input
          type="email"
          name="user_email"
          className="border-solid border-2 border-gray-800"
          {...register("email", { required: "E-mail is required" })}
        />
        {errors?.email && errors.email.message}
        <label>Message</label>
        <textarea
          name="message"
          className="border-solid border-2 border-gray-800"
          {...register("message", { required: "Message is required" })}
        />
        {errors?.message && errors.message.message}
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default EmailForm;
