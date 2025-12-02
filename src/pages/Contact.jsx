import React, { useRef, useState } from "react";
import Particles from "../components/Particles";

const Contact = () => {
  const pixelRef = useRef(null);
  const [status, setStatus] = useState("idle"); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
  
    const formData = new FormData(e.target);
    formData.append("access_key", "73d0ed18-1a12-482e-8541-67b194c9858e");
  
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
  
    const data = await res.json();
  
    if (data.success) {
      setStatus("success");
      e.target.reset();
      setTimeout(() => setStatus("idle"), 3500);
    } else {
      console.error("Web3Forms error:", data);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3500);
    }
  };  

  return (
    <section
      id="contact"
      className="relative bg-[#1f1d1c] py-18 px-6 overflow-hidden"
    >
        <Particles />

      {/* Content */}
      <div className="relative max-w-3xl z-10 mx-auto text-center mb-20 mt-20">
        <h3 className="text-white/70 font-bold font-dope tracking-3 text-[15vh] mb-4">
          Get In Touch
        </h3>

        {/* STATUS MESSAGES */}
        {status === "loading" && (
          <div className="text-[#B19EEF] text-2xl font-dope animate-pulse">
            Sending...
          </div>
        )}

        {status === "success" && (
          <div className="text-[#B19EEF] text-3xl font-dope animate-glow">
          Thank you for your message. I will get back to you as soon as possible! 💜
          </div>
        )}

        {status === "error" && (
          <div className="text-red-400 text-2xl font-dope">
            Something went wrong ❌
          </div>
        )}

<form className="space-y-8 text-left mt-8" onSubmit={handleSubmit}>
  <input type="hidden" name="subject" value="New Website Message" />

  <div className="flex flex-col text-[#FFFFFFCC]">
    <label className="mb-2 font-druk text-3xl tracking-wide">Name</label>
    <input
      name="name"
      type="text"
      required
      className="bg-[#141418] border border-white/20 rounded-xl px-5 py-2 text-lg focus:border-[#B19EEF] focus:ring-2 focus:ring-[#B19EEF]/40 outline-none transition-all"
    />
  </div>

  <div className="flex flex-col text-[#FFFFFFCC]">
    <label className="mb-2 font-druk text-3xl tracking-wide">Email</label>
    <input
      name="email"
      type="email"
      required
      className="bg-[#141418] border border-white/20 rounded-xl px-5 py-2 text-lg focus:border-[#B19EEF] focus:ring-2 focus:ring-[#B19EEF]/40 outline-none transition-all"
    />
  </div>

  <div className="flex flex-col text-[#FFFFFFCC]">
    <label className="mb-2 font-druk text-3xl tracking-wide">Message</label>
    <textarea
      name="message"
      rows={2}
      required
      className="bg-[#141418] font-druk text-2xl border border-white/20 rounded-xl px-5 py-2 focus:border-[#B19EEF] focus:ring-2 focus:ring-[#B19EEF]/40 outline-none transition-all tracking-wide resize-none"
    ></textarea>
  </div>

  <button
    type="submit"
    className="relative inline-block mt-3 px-10 py-4 text-xl font-dope tracking-wider text-[#FFFFFFCC] bg-[#B19EEF] rounded-xl shadow-[0_0_30px_#B19EEF] hover:shadow-[0_0_50px_#B19EEF] transition-all"
  >
    SEND MESSAGE
  </button>
</form>

        <input type="hidden" name="subject" value="New Website Message" />
      </div>
    </section>
  );
};

export default Contact;
