import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:henrybentil88@gmail.com?subject=${formData.subject}&body=Hi, 
    my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly z-0"
    >
      <h3 className="absolute top-20 md:top-12 uppercase tracking-[20px] text-gray-500 text-1xl md:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-1xl font-semibold text-center md:text-3xl">
          I have got just what you need.{" "}
          <span className="decoration-[#00f2ea]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-3">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#00f2ea] h-6 w-6 animate-pulse" />
            <p className="text-s md:text-2xl">+233546283768</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#00f2ea] h-6 w-6 animate-pulse" />
            <p className="text-s md:text-2xl">henrybentil@88gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#00f2ea] h-6 w-6 animate-pulse" />
            <p className="text-s md:text-2xl">Josepace Lane Weija</p>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-2">
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="contactInput"
                  type="text"
                />
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="contactInput"
                  type="email"
                />
              </div>

              <input
                {...register("subject")}
                placeholder="Subject"
                className="contactInput w-full mt-2"
                type="text"
              />

              <textarea
                {...register("message")}
                className="contactInput w-full mt-2"
                placeholder="Message"
              />

              <div className="grid place-items-center">
                <button
                  type="submit"
                  className="bg-[#00f2ea] py-3 w-full rounded-md text-black font-bold text-xs"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactMe;
