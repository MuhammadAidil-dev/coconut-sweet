import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col py-4 px-[5%] bg-primary text-white lg:flex-row lg:items-center">
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-semibold">Coconut Sweet</h3>
        <p className="text-xs font-thin">
          Jl. Tanjung harapan GG. Arafat Kelurahan : Pekan Arba Kecamatan :
          Tembilahan Kab/Kota : Kab. Indragiri Hilir Provinsi : Riau
        </p>
      </div>
      <div className="flex-1 flex flex-col mt-4 border-b pb-2 lg:border-none lg:items-center">
        <h3 className="text-lg font-semibold mb-2">Ikuti Kami</h3>
        <div className="flex flex-col gap-2">
          <a
            href="https://www.instagram.com/wmk_batch_iii_24?igsh=MTQ3bWJtMnM2d2RnbA=="
            className="flex items-center text-xs gap-2"
          >
            <FaInstagram />
            <p>wmk_batch_iii_24</p>
          </a>
          <a
            href="https://wa.me/6282280853894"
            className="flex items-center text-xs gap-2"
          >
            <FaWhatsapp />
            <p>0822-8085-3894</p>
          </a>
        </div>
      </div>
      <div className="flex-1 flex flex-col mt-4">
        <p className="text-sm text-center">
          © 2024 Coconut Sweet. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
