export const CONFIG = {
  WEBHOOK_URL: 'https://discordapp.com/api/webhooks/1549712999718064189/OruERz20gxzaYDHGLzBl6iDPa0tvtDhPCyrQTST_Q9Uuyx_XLJ9ioNjsxpcdcPyfFOPQ', 
  STORE_NAME: 'BeByte',
  EVENT_NAME: 'Technopreneurship 5.0',
  TAG_LINE: 'Semangat Baru',
  VERSION: '2026',
  MASCOT: 'assets/bebyte-mascot.png',
  LOGO: 'assets/bebyte-logo.png',
  RECEIPT_FOOTER: 'Terima Kasih',
  QRIS_STATIC: '00020101021126570011ID.DANA.WWW011893600915303412044302090341204430303UMI51440014ID.CO.QRIS.WWW0215ID10265714866570303UMI5204899953033605802ID5911BLUE MATRIX6015Kota Padang Sid61052271163042C9C',
  ROLE_ID_DAPUR: '1549712082122055760' 
};
export const MENU = [
  // ===== SUP =====
  { id: 1, name: 'Sup Ayam Mantap', nickname: 'SUPTAP 🍲', desc: 'Sup ayam mantap, kuah gurih nagih', price: 20000, category: 'Sup', img: './assets/sup.jpg', variants: null, active: true },
  { id: 2, name: 'Sup Ayam Sehat', nickname: 'SUPHAT 💪', desc: 'Sup ayam sehat, isi komplit', price: 30000, category: 'Sup', img: './assets/sup.jpg', variants: null, active: true },
  { id: 3, name: 'Sup Daging Sehat', nickname: 'SUPGING 🥩', desc: 'Sup daging sehat, empuk bergizi', price: 30000, category: 'Sup', img: './assets/sup.jpg', variants: null, active: true },
  // ===== NASI =====
  { id: 4, name: 'Nasi Putih', nickname: 'NASPUT 🍚', desc: 'Nasi putih hangat', price: 3000, category: 'Nasi', img: './assets/nasi.jpg', variants: null, active: true },
  { id: 5, name: 'Nasi Tumpeng', nickname: 'TUMPENG 🎉', desc: 'Nasi tumpeng komplit buat acara', price: 30000, category: 'Nasi', img: './assets/nasi.jpg', variants: null, active: true },
  { id: 6, name: 'Nasi Goreng', nickname: 'NASGOR 🔥', desc: 'Nasi goreng spesial', price: 17000, category: 'Nasi', img: './assets/nasi.jpg', variants: null, active: true },
  // ===== AYAM =====
  {
    id: 46, name: 'Ayam', desc: 'Aneka olahan ayam', price: 18000, category: 'Ayam', img: './assets/ayam.jpg', active: true,
    variants: [
      { name: 'Penyet', nickname: 'PENYET 🍗', desc: 'Ayam penyet sambal pedas', active: true },
      { name: 'Geprek', nickname: 'GEPREK 🌶️', desc: 'Ayam geprek sambal bawang', active: true }
    ]
  },
  // ===== IKAN =====
  { id: 9, name: 'Ikan Asam Manis', nickname: 'ASMAN 🐟', desc: 'Ikan asam manis segar', price: 25000, category: 'Ikan', img: './assets/ikan.jpg', variants: null, active: true },
  { id: 10, name: 'Pecel Lele', nickname: 'PECLE 🐠', desc: 'Pecel lele + sambal + lalapan', price: 18000, category: 'Ikan', img: './assets/ikan.jpg', variants: null, active: true },
  // ===== MIE =====
  {
    id: 47, name: 'Mie', desc: 'Aneka mie', price: 15000, category: 'Mie', img: './assets/mie.jpg', active: true,
    variants: [
      { name: 'Tiaw', nickname: 'TIAW 🍜', desc: 'Mie tiaw gurih', active: true },
      { name: 'Ifu Mie', nickname: 'IFUMIE 🍜', desc: 'Ifu mie siram kental', active: true },
      { name: 'Mihun', nickname: 'MIHUN 🍜', desc: 'Mihun goreng lembut', active: true },
      { name: 'Bangladesh', nickname: 'BANGLA 🍜', desc: 'Mie Bangladesh rempah khas', active: true },
      { name: 'Indomie Goreng', nickname: 'INDOGOR 🍝', desc: 'Indomie goreng favorit sejuta umat', active: true },
      { name: 'Indomie Rebus', nickname: 'INDOREBUS 🍲', desc: 'Indomie rebus hangat', active: true }
    ]
  },
  // ===== SNACKS =====
  { id: 17, name: 'Ceker Pedas', nickname: 'CEKER 🔥', desc: 'Ceker pedas nampol', price: 10000, category: 'Snacks', img: './assets/snacks.jpg', variants: null, active: true },
  { id: 18, name: 'Tahu Pong', nickname: 'TAHUPONG', desc: 'Tahu pong kopong gurih', price: 10000, category: 'Snacks', img: './assets/snacks.jpg', variants: null, active: true },
  { id: 19, name: 'Perkedel Kentang', nickname: 'PERKEDEL 🥔', desc: 'Perkedel kentang gurih', price: 3000, category: 'Snacks', img: './assets/snacks.jpg', variants: null, active: true },
  { id: 20, name: 'Tempe Bacem', nickname: 'BACEM 🍯', desc: 'Tempe bacem manis legit', price: 5000, category: 'Snacks', img: './assets/snacks.jpg', variants: null, active: true },
  { id: 21, name: 'Risol', nickname: 'RISOL 🥐', desc: 'Risol isi creamy', price: 10000, category: 'Snacks', img: './assets/snacks.jpg', variants: null, active: true },
  // ===== GORENGAN =====
  { id: 22, name: 'Gorengan', nickname: 'GORENGAN 🍤', desc: 'Gorengan aneka, hitung per biji', price: 1000, category: 'Gorengan', img: './assets/gorengan.jpg', variants: null, active: true, custom_qty: true },
  // ===== TEH =====
  { id: 23, name: 'Teh Manis Panas', nickname: 'TEHPAN 🍵', desc: 'Teh manis panas', price: 5000, category: 'Teh', img: './assets/teh.jpg', variants: null, active: true },
  { id: 24, name: 'Teh Manis Dingin', nickname: 'TEHDING 🧊', desc: 'Teh manis dingin segar', price: 6000, category: 'Teh', img: './assets/teh.jpg', variants: null, active: true },
  { id: 25, name: 'Teh Serai Rempah', nickname: 'SEREH 🌿', desc: 'Teh serai rempah hangat', price: 10000, category: 'Teh', img: './assets/teh.jpg', variants: null, active: true },
  { id: 26, name: 'Lemon Tea', nickname: 'LEMONTEA 🍋', desc: 'Lemon tea segar', price: 10000, category: 'Teh', img: './assets/teh.jpg', variants: null, active: true },
  { id: 27, name: 'Teh Susu Telor', nickname: 'TST 🥛', desc: 'Teh susu telor khas', price: 15000, category: 'Teh', img: './assets/teh.jpg', variants: null, active: true },
  { id: 28, name: 'TST Pinang Muda', nickname: 'PINANG 🥥', desc: 'TST pinang muda jos', price: 30000, category: 'Teh', img: './assets/teh.jpg', variants: null, active: true },
  { id: 29, name: 'Teh Hijau Sanger', nickname: 'SANGER 🍵', desc: 'Teh hijau sanger', price: 10000, category: 'Teh', img: './assets/teh.jpg', variants: null, active: true },
  // ===== KOPI =====
  { id: 30, name: 'Kopi Hitam', nickname: 'KOPIHIT ☕', desc: 'Kopi hitam pekat', price: 5000, category: 'Kopi', img: './assets/kopi.jpg', variants: null, active: true },
  { id: 31, name: 'Kopi Dingin', nickname: 'KOPDING 🧊', desc: 'Kopi dingin segar', price: 7000, category: 'Kopi', img: './assets/kopi.jpg', variants: null, active: true },
  { id: 32, name: 'Cappuccino', nickname: 'CAPPU ☕', desc: 'Cappuccino creamy', price: 10000, category: 'Kopi', img: './assets/kopi.jpg', variants: null, active: true },
  { id: 33, name: 'Kopi Susu', nickname: 'KOPSUS 🥛', desc: 'Kopi susu lembut', price: 10000, category: 'Kopi', img: './assets/kopi.jpg', variants: null, active: true },
  // ===== ES KEKINIAN =====
  {
    id: 48, name: 'Es Kekinian', desc: 'Es kekinian segar', price: 10000, category: 'Es Kekinian', img: './assets/es.jpg', active: true,
    variants: [
      { name: 'Matcha', nickname: 'MATCHA 🍵', desc: 'Es matcha kekinian', active: true },
      { name: 'Chocolatos Coklat', nickname: 'CHOLATOS 🍫', desc: 'Es chocolatos coklat', active: true },
      { name: 'Es Teler Sultan', nickname: 'TELER 👑', desc: 'Es teler sultan komplit', active: true },
      { name: 'Pisang Ijo', nickname: 'PIJO 🍌', desc: 'Es pisang ijo kekinian', active: true }
    ]
  },
  // ===== JUS BUAH =====
  {
    id: 49, name: 'Jus Buah', desc: 'Jus buah murni', price: 10000, category: 'Jus Buah', img: './assets/jus.jpg', active: true,
    variants: [
      { name: 'Jeruk', nickname: 'JUSJER 🍊', desc: 'Jus jeruk murni', active: true },
      { name: 'Alpukat', nickname: 'JUSPUKAT 🥑', desc: 'Jus alpukat creamy', active: true },
      { name: 'Wortel', nickname: 'JUSWORT 🥕', desc: 'Jus wortel segar', active: true },
      { name: 'Mangga', nickname: 'JUSMANGGA 🥭', desc: 'Jus mangga manis', active: true }
    ]
  },
  // ===== SUP BUAH =====
  {
    id: 50, name: 'Sup Buah', desc: 'Sup buah segar', price: 15000, category: 'Sup Buah', img: './assets/sup-buah.jpg', active: true,
    variants: [
      { name: 'Apel', nickname: 'SUPAPEL 🍎', desc: 'Sup buah apel segar', active: true },
      { name: 'Anggur', nickname: 'SUPANGGUR 🍇', desc: 'Sup buah anggur segar', active: true },
      { name: 'Strawberry', nickname: 'SUPSTRO 🍓', desc: 'Sup buah strawberry segar', active: true }
    ]
  },
  // ===== BANDREK =====
  { id: 45, name: 'Bandrek', nickname: 'BANDREK 🫖', desc: 'Bandrek hangat rempah', price: 10000, category: 'Bandrek', img: './assets/bandrek.jpg', variants: null, active: true },
];
