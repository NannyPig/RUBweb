import {
  FaRecycle,
  FaShieldAlt,
  FaPaintBrush,
  FaTags,
  FaTruck,
  FaHandsHelping,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="text-gray-800">
      {/* Hero */}
      <section className="bg-green-100 p-6 sm:p-10 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">
          Duurzame en stijlvolle tassen voor uw bedrijf
        </h1>
        <p className="text-base sm:text-lg">
          Onze non-woven polypropyleen tassen combineren milieubewustzijn met professionele uitstraling.
        </p>
        <Link to="/products">
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700">
            Bekijk onze producten
          </button>
        </Link>
      </section>

      {/* Over het product */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          Wat zijn non-woven polypropyleen tassen?
        </h2>
        <p className="text-base sm:text-lg text-center">
          Onze niet-geweven polypropyleen tassen zijn licht, sterk en waterbestendig – een ideaal promotiemiddel dat milieuvriendelijkheid en kwaliteit uitstraalt.
        </p>
      </section>

      {/* Waarom kiezen voor ons */}
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Waarom kiezen voor onze tassen?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Feature
            icon={<FaRecycle />}
            title="Duurzaam"
            description="100% recyclebaar en een ecologisch alternatief voor plastic."
          />
          <Feature
            icon={<FaShieldAlt />}
            title="Stevig & Waterbestendig"
            description="Scheurvast materiaal dat lang meegaat."
          />
          <Feature
            icon={<FaPaintBrush />}
            title="Personaliseerbaar"
            description="Voeg eenvoudig je logo of merk toe."
          />
          <Feature
            icon={<FaTags />}
            title="Kosteneffectief"
            description="Betaalbaar én herbruikbaar, keer op keer."
          />
          <Feature
            icon={<FaTruck />}
            title="Snelle levering"
            description="Betrouwbaar en op tijd voor elk event."
          />
          <Feature
            icon={<FaHandsHelping />}
            title="Topservice"
            description="Wij begeleiden je van ontwerp tot levering."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 px-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Klaar om je merk een boost te geven?
        </h2>
        <Link to="/products">
          <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700">
            Bekijk onze tassen
          </button>
        </Link>
      </section>
    </div>
  );
};

// Reusable Feature Card
const Feature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-shadow">
    <div className="text-3xl sm:text-4xl mb-4 text-green-600">{icon}</div>
    <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default HomePage;
