import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_RUB",     // <-- vervang met je eigen gegevens
        "template_3fncw6d",    // <-- vervang met je eigen gegevens
        form.current,
        "Zk27lXiRGoVFAf68F"      // <-- vervang met je eigen gegevens
      )
      .then(
        () => {
          setStatus("Bedankt voor je bericht! We nemen zo snel mogelijk contact op.");
          form.current?.reset();
        },
        (error) => {
          console.error("Fout bij verzenden", error.text);
          setStatus("Er ging iets mis. Probeer opnieuw.");
        }
      );
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Neem contact met ons op</h1>
      <p className="text-gray-700 mb-10 text-center">
        Heb je vragen of wil je een offerte aanvragen? Vul onderstaand formulier in!
      </p>

      <form ref={form} onSubmit={sendEmail} className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Naam</label>
          <input type="text" name="user_name" required className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">E-mailadres</label>
          <input type="email" name="user_email" required className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Bericht</label>
          <textarea name="message" rows={5} required className="w-full border rounded p-2"></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Verstuur
        </button>

        {status && <p className="text-green-600 mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
};

export default ContactPage;
