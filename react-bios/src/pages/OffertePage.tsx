import React, { useRef, useState } from "react";
import { useCart } from "../contexts/CartContext";
import emailjs from "@emailjs/browser";

const OffertePage = () => {
  const { cartItems } = useCart(); // Haal winkelmanditems op uit de context
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [includePersonalization, setIncludePersonalization] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current || isSending) return;

    setIsSending(true);
    setStatus("Bezig met verzenden...");

    try {
      const formData = new FormData(form.current);
      const templateParams = {
        voornaam: (formData.get("voornaam") ?? "").toString(),
        achternaam: (formData.get("achternaam") ?? "").toString(),
        email: (formData.get("email") ?? "").toString(),
        telefoon: (formData.get("telefoon") ?? "").toString(),
        beschrijving: (formData.get("beschrijving") ?? "").toString(),
        personalisatie: includePersonalization ? "Ja" : "",
        // Verkrijg een geformatteerde string van productnamen
        items: cartItems.map((item) => `${item.title} - €${item.price?.toFixed(2) || "0.00"}`).join(", "),
      };

      await emailjs.send(
        "service_RUB", // Vervang met je eigen EmailJS service ID
        "template_7vpgs3l", // Vervang met je eigen EmailJS template ID
        templateParams,
        "Zk27lXiRGoVFAf68F" // Vervang met je eigen EmailJS user ID
      );

      setStatus("Offerteaanvraag succesvol verzonden!");
      form.current.reset();
      setIncludePersonalization(false);
    } catch (error) {
      console.error("Verzendfout:", error);
      setStatus("Fout bij verzenden. Probeer het later opnieuw.");
    } finally {
      setIsSending(false);
    }
  };

  // Bereken de totaalprijs van de items in het winkelmandje
  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.price || 0; // Als geen prijs, zet op 0
    return total + price;
  }, 0);

  return (
    <div className="text-gray-800">
      {/* Hero header */}
      <section className="bg-green-100 p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Vraag een offerte aan</h1>
        <p className="text-lg">Bekijk de items die je wilt kopen en vul het formulier in voor de offerte.</p>
      </section>

      {/* Winkelmandje overzicht */}
      <section className="max-w-3xl mx-auto p-8">
        <div className="space-y-6 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Jouw Winkelmandje</h2>

          {cartItems.length === 0 ? (
            <p className="text-center">Je winkelmandje is leeg.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img
                      src={item.personalizedImage || new URL(`../assets/images/${item.poster_path}`, import.meta.url).href}
                      alt={item.title}
                      className="w-24 h-32 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      {item.personalizedImage && (
                        <span className="text-sm text-green-600 font-medium">Gepersonaliseerd</span>
                      )}
                    </div>
                  </div>
                  <span className="text-lg font-semibold">€{item.price?.toFixed(2) || "0.00"}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Totaalprijs: €{totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      </section>

      {/* Formulier */}
      <section className="max-w-3xl mx-auto p-8">
        <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-white rounded-xl shadow-md p-6">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Voornaam*</label>
            <input
              type="text"
              name="voornaam"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Achternaam*</label>
            <input
              type="text"
              name="achternaam"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">E-mailadres*</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Telefoonnummer</label>
            <input
              type="tel"
              name="telefoon"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Beschrijving van je aanvraag*</label>
            <textarea
              name="beschrijving"
              required
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Beschrijf je project of wensen zo duidelijk mogelijk..."
            />
          </div>

          <div className="flex items-start">
            <input
              id="personalization"
              name="personalization"
              type="checkbox"
              checked={includePersonalization}
              onChange={(e) => setIncludePersonalization(e.target.checked)}
              className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label htmlFor="personalization" className="ml-2 text-sm text-gray-700">
              Ik wil graag een gepersonaliseerd product
              <p className="text-gray-500">We nemen contact met je op om dit te bespreken</p>
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3 px-6 rounded-full text-white font-medium text-lg transition ${
                isSending ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isSending ? "Verzenden..." : "Verzend offerteaanvraag"}
            </button>
          </div>

          {status && (
            <div
              className={`text-center p-4 rounded-lg font-medium ${
                status.includes("succes") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default OffertePage;
