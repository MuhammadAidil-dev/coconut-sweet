import { formattingPrice } from '../../../utils/utils';

const ProdukCard = ({ imgSource, variant, deskripsi, price }) => {
  return (
    <div className="w-full flex flex-col bg-white py-2 rounded-md shadow-md lg:w-[90%] lg:h-full">
      <div className="flex justify-center px-8">
        <img
          src={`/${imgSource}`}
          alt="coconut-sweet-variant img"
          className="w-full rounded-md lg:w-[300px] lg:h-[300px]"
        />
      </div>
      <div className="flex flex-col px-8 mt-4 gap-4 py-1">
        <h3 className="text-lg  font-semibold text-black text-center">
          {variant}
        </h3>
        <p className="text-sm">{deskripsi}</p>
        <p className="text-lg font-semibold">Rp {formattingPrice(price)}</p>
      </div>
    </div>
  );
};

export default ProdukCard;
