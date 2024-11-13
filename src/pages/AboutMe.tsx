export default function AboutMe() {
  return (
    <>
      <div className="min-h-screen p-4 text-white flex flex-col md:flex-row gap-4 items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="w-2/3">
          <h1 className="flex flex-col gap-2 font-black text-white text-3xl md:text-4xl lg:text-5xl">
            Hola, soy Edson Ibarra
            <p className="flex flex-col gap-2">
              <span className="text-[#fecc1b] text-xl md:text-2xl lg:text-3xl">
                Desarrollador Full Stack
              </span>{' '}
              <span className="font-medium text-white text-base md:text-lg lg:text-xl">
                Apasionado por crear experiencias web increíbles.
              </span>{' '}
            </p>
          </h1>
        </div>
        <div>
          <img
            className="w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem] md:w-[14rem] md:h-[14rem] rounded-full"
            src="https://res.cloudinary.com/dagqsktxx/image/upload/v1730242883/assets_portfolio/hcqslrssydc09arspn37.png"
          />
        </div>
      </div>
    </>
  );
}
