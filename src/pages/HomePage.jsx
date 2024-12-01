const HomePage = () => {
  return (
    <section id="beranda" className="relative w-full h-screen">
      <img
        src="/coconut_hero_image.jpg"
        alt="coconut sweet hero img"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-y-0 inset-x-0 bg-black bg-opacity-40">
        <div className="w-full h-full flex flex-col justify-center items-center sm:items-start sm:pl-16 md:pl-32">
          <h2 className="text-2xl text-white font-semibold w-64 sm:text-3xl md:w-[600px] md:text-5xl">
            <span className="text-secondary font-bold">Coconut Sweet</span>,
            Pilihan Alami, Pilihan Tepat
          </h2>
          <p className="text-xs text-white w-64 mt-4 sm:text-sm md:text-lg md:w-96">
            Kesegaran kelapa asli dalam bentuk manis yang sempurna, hadir untuk
            melengkapi hari Anda.
          </p>
          <a
            href="#order"
            className="py-2 px-4 rounded-sm bg-primary text-sm text-white font-semibold flex justify-center items-center mt-4 shadow-sm transition-all hover:bg-hover"
          >
            Beli sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
