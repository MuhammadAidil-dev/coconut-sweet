const formattingPrice = (price) => {
  return price.toLocaleString('id-ID');
};

const sendToWhatsapp = (orderMessage) => {
  const { name, nomorHp, jumlah, alamat, variant, totalPrice } = orderMessage;
  const phoneNumber = '6282280853894';

  const message = `Halo Coconut Sweet, saya ingin memesan produk anda, berikut detail informasi : \n\n- Nama: ${name} \n- Nomor HP: ${nomorHp} \n- Jumlah: ${jumlah} \n- Varian: ${variant} \n- Alamat: ${alamat} \n\n Total Harga : Rp ${formattingPrice(
    totalPrice
  )}`;
  const encodedMessage = encodeURIComponent(message);

  // url whatsapp
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Buka WhatsApp di tab baru
  window.open(whatsappURL, '_blank');
};

export { formattingPrice, sendToWhatsapp };
