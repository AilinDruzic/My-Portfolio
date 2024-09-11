import React, { useRef } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const formRef = useRef(null); 

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2d7eba6d-ee02-4476-a99f-fd65c4b143da");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully",
        icon: "success",
        confirmButtonColor: "violet",
      }).then(() => {
        if (formRef.current) {
          formRef.current.reset();
        }
      });
    }
  };

  return (
    <section className="flex justify-center items-center">
      <form
        ref={formRef}
        className="max-w-xl w-full py-6 px-8 rounded-lg  text-zinc-700"
        onSubmit={onSubmit}
      >
        <h2 className="text-2xl text-center">Contact me</h2>
        <div className="">
          <label className="text-lg">Full Name</label>
          <input
            type="text"
            className="w-full h-10 bg-transparent border-solid rounded-md border-2 text-xl p-4 mt-2 font-normal"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>
        <div className="mt-2">
          <label className="text-lg">Email</label>
          <input
            type="email"
            className="w-full h-10 bg-transparent border-solid rounded-md border-2 text-xl p-4 mt-2 font-normal"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <div className="mt-2">
          <label className="text-lg">Message</label>
          <textarea
            name="message"
            id=""
            className="w-full bg-transparent border-solid rounded-md border-2 text-xl p-4 mt-2 font-normal resize-none"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-lg w-full h-8 bg-purple-300 hover:bg-purple-400 text-white rounded-md"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
