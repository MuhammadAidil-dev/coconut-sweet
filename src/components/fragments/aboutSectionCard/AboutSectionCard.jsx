const AboutSectionCard = ({ imgSource, title, content, isOdd }) => {
  return (
    <div
      className={`w-full flex flex-col py-2 px-4 sm:items-center sm:gap-4 ${
        isOdd % 2 !== 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
      }`}
    >
      <div className="flex-1 sm:flex sm:justify-center">
        <img
          src={`/${imgSource}`}
          alt="coconut-sweet-img"
          className="md:max-w-[300px]"
        />
      </div>
      <div className="flex-1 flex justify-center mt-4 px-1 sm:mt-0">
        <div className="flex flex-col md:w-[300px]">
          <h4 className="text-sm text-black font-semibold md:text-xl">
            {title}
          </h4>
          <p className="text-xs font-medium md:text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionCard;
