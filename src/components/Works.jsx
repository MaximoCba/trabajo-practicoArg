export const Works = () => {
  return (
    <div className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
          Creamos productos digitales de clase mundial
        </h1>
        <p className="text-xl text-gray-500">
          Por información sobre diseñar el mundo a los mejores instructores
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="work1.png"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          <p className="text-gray-500">App Design - June 20, 2023</p>
          <h3 className="text-2xl font-bold">App Redesign</h3>
          <p className="text-gray-500">
            Por información sobre diseñar el mundo a los mejores instructores,
            calor ayudando a los estudiantes a alcanzar sus metas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="work2.png"
              className="w-full h-52 object-cover rounded-3xl"
            />
            <p className="text-gray-500">App Design - June 20, 2023</p>
            <h3 className="text-xl font-bold">
              Rediseño de la página de inicio del sitio web del canal
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            <img
              src="work3.png"
              className="w-full h-52 object-cover rounded-3xl"
            />
            <p className="text-gray-500">App Design - June 20, 2023</p>
            <h3 className="text-xl font-bold">
              Nueva aplicación de localización para una nueva empresa
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            <img
              src="work4.png"
              className="w-full h-52 object-cover rounded-3xl "
            />
            <p className="text-gray-500">App Design - June 20, 2023</p>
            <h3 className="text-xl font-bold">
              Plataforma de aplicación de entrega de alimentos
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            <img
              src="work5.png"
              className="w-full h-52 object-cover rounded-3xl"
            />
            <p className="text-gray-500">App Design - June 20, 2023</p>
            <h3 className="text-xl font-bold">
              Aplicación de calendario para la gran empresa SAAS
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
