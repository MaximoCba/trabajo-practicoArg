import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Informacion */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
            Diseño Web de Productos{" "}
            <span className="text-primary py-2 px-4 border-8 border-primary relative inline-block">
              Digitales
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full xl:w-auto bg-primary text-white py-4 px-8 rounded-xl text-xl">
              Contactar
            </button>
            <button className="w-full xl:w-auto flex items-center justify-start text-left gap-4 py-4 px-8 rounded-xl text-xl">
              <RiPlayFill className="bg-secondary text-primary p-4 box-content rounded-full" />{" "}
              Lorem ipsum <br /> dolor sit ametainckl.
            </button>
          </div>
        </div>
      </div>
      {/* Imagen */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Imagenes de Contenido */}
        <div>
          <img
            src="hero2.png"
            className="w-[250px] h-[250px] md:w-[380px] md:h-[400px] object-cover xl:-mt-28"
          />
          <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
            <div className="flex items-center">
              <img
                src="persona1.png"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300"
              />
              <img
                src="persona2.png"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="persona4.png"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="persona3.png"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="persona5.png"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
            </div>
            <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
              120 + Empleados
            </h2>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarFill className="text-primary" />
              5.0 (3.1K Reviews)
            </div>
            <div className="absolute -right-12 -bottom-12 -z-10">
              <div className="relative">
                <RiCheckboxBlankCircleFill className=" text-primary text-8xl" />
                <div className="absolute left-0 top-0 bg-white w-14 h-14"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Circulo */}
        <div className="bg-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] border-[10px] border-primary rounded-full -z-10"></div>
        {/* Logos */}
        <img
          src="figma.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[5%] right-[8%] xl:top-[2%] xl:right-[5%]"
        />
        <img
          src="adobe.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[6%] left-[7%] xl:top-[2%] xl:left-[-5%]"
        />
        <img
          src="sketch.svg"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 absolute bottom-[6%] left-[5%] xl:bottom-[5%] xl:left-[3%] -rotate-12"
        />
      </div>
    </section>
  );
};
