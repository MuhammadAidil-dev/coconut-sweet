import AboutSectionCard from '../components/fragments/aboutSectionCard/AboutSectionCard';
import { dataCoconutSweet } from '../global/data';

const AboutPage = () => {
  return (
    <section id="tentang" className="flex flex-col mt-12 py-2 px-[5%]">
      <h3 className="text-lg text-primary font-semibold text-center mb-8">
        Tentang Coconut Sweet
      </h3>
      <div className="flex flex-col gap-4 items-center sm:gap-6 md:gap-8">
        {dataCoconutSweet.map((data, index) => (
          <AboutSectionCard
            key={index}
            isOdd={index}
            imgSource={data.imgSource}
            title={data.title}
            content={data.content}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
