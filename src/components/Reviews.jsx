import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Escuchemos lo que dicen
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae amet
          dicta nesciunt assumenda accusantium ducimus molestiae nam repudiandae
          perspiciatis, eius, perferendis sit error libero voluptatum
          voluptatibus hic nostrum? Consequatur aliquid mollitia velit quaerat
          repellendus repudiandae, accusantium quod architecto voluptatibus?
          Nulla.
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-6 md:gap-12">
          <img
            src="https://img.freepik.com/foto-gratis/alegre-mujer-mediana-edad-cabello-rizado_1262-20859.jpg?"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full ring-2"
          />
          <img
            src="https://img.freepik.com/foto-gratis/retrato-joven-rubio-mujer_273609-12060.jpg?"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full ring-2"
          />
          <img
            src="https://img.freepik.com/foto-gratis/mujer-bastante-joven-feliz-que-presenta-camara-parque-ciudad_1262-19158.jpg"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />
          <img
            src="https://img.freepik.com/foto-gratis/primer-disparo-hombre-guapo-sonriendo_181624-41237.jpg?"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full ring-2"
          />
          <img
            src="https://img.freepik.com/foto-gratis/retrato-sonriente-joven-encantador-camiseta-gris-pie-contra-fondo-liso_23-2148213406.jpg?"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full ring-2"
          />
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">Ricky Aprilia</h3>
          <h5 className="text-center text-[20px] text-gray-500">
            Founder of Varibo
          </h5>
        </div>
      </div>
    </div>
  );
};
