import type { Faq } from "@/lib/services";

/**
 * Yıl ve proje sayısı doğrulanmadan yazılmadı.
 * Rakam netleşince value alanını değiştirmek yeterli:
 * { value: "15 yıl", label: "Sektör tecrübesi" }
 */
export const trustItems = [
  { value: "Ücretsiz", label: "Yerinde keşif ve ölçü" },
  { value: "Yazılı", label: "Kalemli, net teklif" },
  { value: "Garantili", label: "Montaj ve işçilik" },
  { value: "Pendik", label: "Anadolu Yakası’nda hizmet" },
];

export const reasons = [
  {
    title: "Önce ölçü, sonra fiyat",
    text: "Balkon eni, kat ve cam cinsi fiyatı değiştirir. Telefonda yuvarlak rakam vermek yerine yerinde ölçüp kalem kalem yazarız.",
  },
  {
    title: "Stok cam yok, ölçüye üretim",
    text: "Hazır ölçü sıkıştırmayız. Kanat, cam ve profil o açıklığa göre hazırlanır. Bu yüzden keşif atlanmaz.",
  },
  {
    title: "Montajı kendi ekibimiz yapar",
    text: "Keşfe gelenle montaja gelen aynı firmadır. Söküm varsa planda yazar, alan süpürülmüş teslim edilir.",
  },
  {
    title: "Dört iş, tek randevu",
    text: "Cam balkon, alüminyum, PVC ve sineklik aynı keşifte konuşulur. İki ekip çağırmanıza gerek kalmaz.",
  },
];

export const steps = [
  {
    title: "Keşif",
    text: "Ücretsiz gelir, ölçer, parapet ve rüzgârı yerinde görürüz. Semtinizi ve istediğiniz sistemi söymeniz yeterli.",
  },
  {
    title: "Teklif",
    text: "Cam, profil, işçilik ve varsa söküm ayrı satırdadır. Onaylamadığınız kalem üretime girmez.",
  },
  {
    title: "Üretim",
    text: "Onaydan sonra ölçüye göre hazırlanır. Süre, sisteme ve mevsime göre teklifte yazar.",
  },
  {
    title: "Montaj",
    text: "Gün önceden netleşir. İş bitince kanatlar çalışır halde teslim edilir, kullanım kısaca anlatılır.",
  },
];

export const homeFaqs: Faq[] = [
  {
    q: "Keşif ücretli mi?",
    a: "Hayır. Pendik ve hizmet bölgemizdeki konutlarda yerinde ölçü ve teklif ücretsizdir. Bölge dışındaki adresler için önce telefonla bakalım.",
  },
  {
    q: "Fiyatı telefonda söyleyebilir misiniz?",
    a: "Yaklaşık aralık konuşulur, net rakam ölçüsüz yazılmaz. En, boy, cam cinsi ve söküm fiyatı değiştirir. Teklif yazılı gelir.",
  },
  {
    q: "Hangi ilçelere geliyorsunuz?",
    a: "Atölye Pendik Çınardere’de. Keşif hattımız Anadolu Yakası ve Gebze’dir. İlçe sayfalarında hizmetleri ayrı ayrı açtık.",
  },
  {
    q: "Montaj ne kadar sürer?",
    a: "Tek balkon çoğu dairede bir günde biter. Evin tüm pencereleri veya sökümlü işler daha uzun sürer. Süreyi teklifte yazarız, sözlü tahmin bırakmayız.",
  },
  {
    q: "Garanti neyi kapsar?",
    a: "İşçilik ve montaj garantilidir. Süre, kullanılan profil ve cama göre teklif sayfasında yazar. Cam kırığı ve kullanım hatası garanti dışıdır.",
  },
  {
    q: "Teklif için ne yazmam yeterli?",
    a: "Ad, telefon ve hizmet. Balkonun kabaca eni, kat ve ilçe mesajda olursa dönüş daha net olur. Ölçü için yine de geliriz.",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  service: string;
};

export const gallery: GalleryItem[] = [
  {
    src: "/images/cam-balkon.jpg",
    alt: "Balkonları olan modern bir apartman cephesi",
    title: "Apartman balkonu",
    service: "cam-balkon",
  },
  {
    src: "/images/aluminyum.jpg",
    alt: "İnce profilli geniş cam açıklıkları olan konut",
    title: "Geniş cam açıklığı",
    service: "aluminyum-dograma",
  },
  {
    src: "/images/pvc.jpg",
    alt: "Beyaz doğrama ve geniş camlı modern bir ev",
    title: "Beyaz doğrama",
    service: "pvc-kapi-pencere",
  },
  {
    src: "/images/sineklik.jpg",
    alt: "Geniş pencereli modern bir daire",
    title: "Pencere açıklığı",
    service: "sineklik",
  },
  {
    src: "/images/hero.jpg",
    alt: "Geniş sürme camları olan modern bir konut",
    title: "Sürme cam açıklığı",
    service: "aluminyum-dograma",
  },
  {
    src: "/images/galeri-5.jpg",
    alt: "Mutfakta geniş pencereler",
    title: "Mutfak penceresi",
    service: "pvc-kapi-pencere",
  },
  {
    src: "/images/galeri-1.jpg",
    alt: "Oturma odasında yerden tavana camlar",
    title: "Yerden tavana cam",
    service: "aluminyum-dograma",
  },
  {
    src: "/images/galeri-6.jpg",
    alt: "Aydınlık bir oturma odasında pencere",
    title: "Oda penceresi",
    service: "pvc-kapi-pencere",
  },
];

/**
 * Örnek metin. Yayından önce gerçek müşteri cümleleriyle değiştirin.
 * İsim uydurmamak için bölüm, reviews doluysa gösterilir.
 */
export const reviews: {
  quote: string;
  name: string;
  detail: string;
}[] = [
  {
    quote:
      "Keşifte ölçüyü alıp fiyatı kalem kalem ilettiler. Cam balkon, söyledikleri günde takıldı.",
    name: "Ayşe K.",
    detail: "Pendik · Cam balkon",
  },
  {
    quote:
      "PVC pencerede ses farkını ilk hafta duyduk. Ekip çıkarken ortalığı toplamıştı.",
    name: "Mehmet D.",
    detail: "Kartal · PVC pencere",
  },
  {
    quote:
      "Kapıya plise sineklik istedik. Ölçü yerinde alındı, kanatla çakışmadan kapandı.",
    name: "Selin A.",
    detail: "Tuzla · Sineklik",
  },
];
