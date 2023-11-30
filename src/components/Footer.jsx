//Iconos
import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterXLine,
  RiGithubLine,
} from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="bg-tertiary xl:p-20 p-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="w-1/6">
          <a
            href="#"
            className="text-2xl font-bold relative p-1 bg-tertiary text-white"
          >
            Punto<span className="text-primary text-5xl">.</span>
          </a>
        </div>
        {/* Redes sociales */}
        <nav className="flex items-center gap-4">
          <a className="block text-white bg-primary rounded-full p-4">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a className="block text-white bg-primary rounded-full p-4">
            {" "}
            <RiFacebookLine />{" "}
          </a>
          <a className="block text-white bg-primary rounded-full p-4">
            {" "}
            <RiTwitterXLine />{" "}
          </a>
          <a className="block text-white bg-primary rounded-full p-4">
            {" "}
            <RiGithubLine />{" "}
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold text-white text-center md:text-left">
          Compañia
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="block text-gray-300 hover:text-white transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white transition-colors"
          >
            Prensa
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white transition-colors"
          >
            Inversores
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white transition-colors"
          >
            Eventos
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white transition-colors"
          >
            Condiciones de uso
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white transition-colors"
          >
            Política de Privacidad
          </a>
          <button
            type="button"
            className="font-semibold py-2 px-6 bg-primary text-white rounded-xl "
          >
            Contacto
          </button>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          &copy; 2023 Punto 33. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
