import ProdukCard from '../components/fragments/produk/ProdukCard';
import { dataVariantProduk } from '../global/data';
import InputContainer from '../components/fragments/inputContainer/InputContainer';
import { useInput } from '../hooks/hooks';
import { useEffect, useState } from 'react';
import { formattingPrice, sendToWhatsapp } from '../utils/utils';

const ProdukPage = () => {
  return (
    <section id="produk" className="flex flex-col px-[5%] py-2 mt-8">
      <ProdukList />
      <ProdukOrder />
    </section>
  );
};

const ProdukList = () => {
  return (
    <article className="flex flex-col">
      <h3 className="text-lg text-primary font-semibold text-center">
        Produk Kami
      </h3>
      {/* produk list */}
      <div className="grid grid-cols-1 mt-4 items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:justify-center">
        {dataVariantProduk.map((data, index) => (
          <ProdukCard
            key={index}
            imgSource={data.imgSource}
            variant={data.variant}
            deskripsi={data.deskripsi}
            price={data.price}
          />
        ))}
      </div>
    </article>
  );
};

const ProdukOrder = () => {
  return (
    <article id="order" className="flex flex-col mt-12 py-2 w-full">
      <div className="flex flex-col items-center px-2 gap-2">
        <h3 className="text-lg text-primary font-semibold text-center">
          Pesan Sekarang dengan Mudah!
        </h3>
        <p className="text-xs text-center">
          Pilih varian rasa favorit Anda, isi formulir, dan kami akan
          mengirimkan Coconut Sweet langsung ke rumah Anda!
        </p>
      </div>
      <div className="flex flex-col mt-4 items-center md:w-[700px] md:mx-auto">
        <StepOrder />
        <ProdukOrderForm />
      </div>
    </article>
  );
};

const StepOrder = () => {
  return (
    <div className="flex-1 flex flex-col py-2 px-4 border border-slate-900 rounded-sm md:w-full">
      <h4 className="text-sm text-primary font-semibold">
        Langkah-Langkah Pemesanan Coconut Sweet via WhatsApp
      </h4>
      <ul className="px-2 flex flex-col mt-4 gap-2">
        <li className="text-xs">1. Pilih Produk dan Varian Rasa</li>
        <li className="text-xs">2. Isi Detail Pemesanan</li>
        <li className="text-xs">3. Klik Tombol Pesan Sekarang</li>
        <li className="text-xs">4. Konfirmasi pesanan di wa</li>
        <li className="text-xs">5. lakukan pembayaran dan selesai</li>
      </ul>
    </div>
  );
};

const ProdukOrderForm = () => {
  const [name, setName] = useInput();
  const [nomorHp, setNomorHp] = useInput();
  const [jumlah, setJumlah] = useInput();
  const [alamat, setAlamat] = useInput();
  const [variant, setVariant] = useState('original');
  const [totalPrice, setTotalPrice] = useState(0);

  const handleVariantInput = (event) => {
    setVariant(event.target.value);
  };

  const handleTotalPrice = () => {
    setTotalPrice(jumlah * 10000);
  };

  const handleNomorHp = (event) => {
    const input = event.target.value;
    if (/^\d*$/.test(input)) {
      setNomorHp(event);
    }
  };

  const handleSubmitOrder = (event) => {
    event.preventDefault();
    const newOrder = {
      name,
      nomorHp,
      jumlah,
      alamat,
      variant,
      totalPrice,
    };

    sendToWhatsapp(newOrder);
  };

  useEffect(() => {
    handleTotalPrice();
  }, [jumlah]);

  return (
    <div className="w-full mt-4 bg-white rounded-md shadow-md p-4 md:mt-12">
      <form onSubmit={handleSubmitOrder} className="flex flex-col gap-4">
        <InputContainer
          label="Nama"
          type="text"
          id="name"
          value={name}
          onChange={setName}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="nomorHp" className="text-sm font-semibold">
            Nomor HP
          </label>
          <input
            type="text"
            id="nomorHp"
            value={nomorHp}
            onChange={handleNomorHp}
            className="outline-none border border-primary rounded-md py-2 px-2 text-xs"
            required
            autoComplete="off"
            pattern="[0-9]*"
            minLength={10}
            maxLength={13}
          />
        </div>
        <InputContainer
          label="Jumlah"
          type="number"
          id="jumlah"
          value={jumlah}
          onChange={setJumlah}
        />
        <div className="flex flex-col">
          <label htmlFor="variant" className="text-sm font-semibold">
            Variant
          </label>
          <select
            name="variant"
            id="variant"
            value={variant}
            onChange={handleVariantInput}
            className="outline-none border border-primary rounded-md py-2 px-2 text-xs"
          >
            <option value="original">Original</option>
            <option value="pandan">Pandan</option>
            <option value="strawberry">Strawberry</option>
          </select>
        </div>
        <InputContainer
          label="Alamat"
          type="text"
          id="alamat"
          value={alamat}
          onChange={setAlamat}
        />
        <div className="mt-4">
          <p>Total Harga: Rp {formattingPrice(totalPrice)}</p>
        </div>
        <button
          type="submit"
          className="mt-4 py-1 px-2 bg-primary text-sm text-white font-semibold rounded-sm transition-all hover:bg-hover"
        >
          Pesan
        </button>
      </form>
    </div>
  );
};

export default ProdukPage;
