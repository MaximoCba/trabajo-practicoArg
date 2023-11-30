import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";

export const Services = () => {
  return (
    <div className="grid grind-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">Cómo te podemos ayudar</h1>
        <p className="text-[20px] text-gray-500">
          Sigue nuestro boletín. Actualizaremos periódicamente su último
          proyecto y su disponibilidad.
        </p>
        <form className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Correo Electrónico"
            />
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Suscribete
            </button>
          </div>
        </form>
      </div>
      {/* Servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-6xl p-2 bg-secondary text-primary rounded-xl" />
          <h3 className="text-[20px] font-bold">IU/UX Desing</h3>
          <p className="text-gray-500">
            A veces las funciones requieren una breve descripción
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-6xl p-2 bg-secondary text-primary rounded-xl" />
          <h3 className="text-[20px] font-bold">Logo Branding</h3>
          <p className="text-gray-500">
            A veces las funciones requieren una breve descripción
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-6xl p-2 bg-secondary text-primary rounded-xl" />
          <h3 className="text-[20px] font-bold">App Design</h3>
          <p className="text-gray-500">
            A veces las funciones requieren una breve descripción
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-6xl p-2 bg-secondary text-primary rounded-xl" />
          <h3 className="text-[20px] font-bold">Website Design</h3>
          <p className="text-gray-500">
            A veces las funciones requieren una breve descripción
          </p>
        </div>
      </div>
    </div>
  );
};
