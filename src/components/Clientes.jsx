export const Clientes = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col gap-8 items-center justify-center mt-20 xl:mt-0">
      <h1 className="text-2xl font-medium text-gray-800 text-center">
        Con la confianza de las mejores empresas
      </h1>
      <div className="flex flex-col md:flex-row items-center flex-wrap gap-20">
        <img src="google.png" className="w-40" />
        <img src="airbnb.png" className="w-40" />
        <img src="amazon.png" className="w-40" />
        <img src="shopify.png" className="w-40" />
        <img src="youtube.png" className="w-40" />
      </div>
    </div>
  );
};
