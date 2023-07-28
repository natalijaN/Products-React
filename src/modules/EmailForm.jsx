import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Text from "../components/Text";
import Container from "../components/Container";
import Label from "../components/Label";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const sendEmail = (data, e) => {
    e.preventDefault();
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
        <Label>Name</Label>
        <Input
          type="text"
          name="user_name"
          {...register("name", { required: "Name is required" })}
        />
        {errors?.name && errors.name.message}
        <Label>E-mail</Label>
        <Input
          type="email"
          name="user_email"
          {...register("name", { required: "Name is required" })}
        />
        {errors?.email && errors.email.message}
        <Label>Message</Label>
        <Textarea
          name="message"
          {...register("message", { required: "Message is required" })}
        />
        {errors?.message && errors.message.message}
        <Container extraClass="items-center w-full mt-1">
          <Button type="submit" extraClass="bg-gray-500 p-1 rounded">
            <Text>Send</Text>
          </Button>
        </Container>
      </form>
    </div>
  );
};

export default EmailForm;
