import { services } from "@/lib/services";

export type Area = {
  slug: string;
  name: string;
  city: string;
  intro: string;
  housing: string;
};

/**
 * Yeni ilçe veya il eklemek için bu diziye bir kayıt yazın.
 * /bolgeler/[bolge] ve /bolgeler/[bolge]/[hizmet] sayfaları
 * generateStaticParams ile kendiliğinden oluşur.
 */
export const areas: Area[] = [
  {
    slug: "istanbul",
    name: "İstanbul",
    city: "İstanbul",
    intro:
      "Atölyemiz Pendik Çınardere’de. Keşif ve montajı İstanbul Anadolu Yakası’nda planlıyoruz. Avrupa Yakası için önce arayın; işin ölçüsüne göre gün ayırırız.",
    housing:
      "Sahilde rüzgâr ve tuz, iç kesimlerde site balkonu öne çıkar. Cam kalınlığı ve profil buna göre seçilir, her ilçeye aynı sistemi yazmayız.",
  },
  {
    slug: "pendik",
    name: "Pendik",
    city: "İstanbul",
    intro:
      "Atölye Çınardere Mahallesi Ayazma Caddesi’nde. Kaynarca, Yenişehir, Kurtköy, Velibaba ve sahil hattına keşif buradan çıkar.",
    housing:
      "Yeni sitelerde geniş sürme açıklık, eski apartmanlarda dar balkon daha sık gelir. Dar balkonda katlanır sistem, geniş cephede sürme sistem rahat eder.",
  },
  {
    slug: "kartal",
    name: "Kartal",
    city: "İstanbul",
    intro:
      "Kartal sahil, Cevizli ve Yakacık hattındaki apartmanlara Pendik’ten keşfe geliyoruz.",
    housing:
      "Yüksek katta rüzgâr, kanat genişliğini sınırlar. Cam kalınlığını balkonda, pencereyi açarak konuşuruz.",
  },
  {
    slug: "tuzla",
    name: "Tuzla",
    city: "İstanbul",
    intro:
      "İçmeler, Aydınlı, Postane ve şehre yakın yeni sitelere Pendik üzerinden geçiyoruz.",
    housing:
      "Yeni konutlarda cam balkon ile PVC pencere çoğu zaman aynı dairede istenir. İkisini tek keşifte ölçer, teklifleri ayrı yazarız.",
  },
  {
    slug: "maltepe",
    name: "Maltepe",
    city: "İstanbul",
    intro:
      "Maltepe sahil ve yamaçtaki binalarda, manzarayı bölmeden balkon kapatma ölçüsü alıyoruz.",
    housing:
      "Yamaçta rüzgâr sahilden farklı eser. Kanat kilidi ve cam kalınlığı bu yüzden daireye göre değişir.",
  },
  {
    slug: "sultanbeyli",
    name: "Sultanbeyli",
    city: "İstanbul",
    intro:
      "Sultanbeyli sitelerinde PVC pencere, sineklik ve cam balkon için yerinde ölçü alıyoruz.",
    housing:
      "Site içi montaj saati yönetime bağlı olabilir. Keşifte asansör, montaj günü ve gürültü saatini sorarız.",
  },
  {
    slug: "sancaktepe",
    name: "Sancaktepe",
    city: "İstanbul",
    intro:
      "Sancaktepe’deki yeni konutlarda doğrama yenileme ve balkon kapatma işlerini ölçüye göre hazırlıyoruz.",
    housing:
      "Aynı sitede balkonlar birbirine benzer, daire içi ölçü yine de kayar. Her daire ayrı ölçülür, komşu ölçüyle imalat yapılmaz.",
  },
  {
    slug: "atasehir",
    name: "Ataşehir",
    city: "İstanbul",
    intro:
      "Ataşehir sitelerinde cam balkon ve alüminyum sürme sistemler için keşif yapıyoruz.",
    housing:
      "Yönetim, profil rengi ve dış cephe görünümü için kural koymuş olabilir. Sözleşmedeki maddeyi keşifte isteriz.",
  },
  {
    slug: "kadikoy",
    name: "Kadıköy",
    city: "İstanbul",
    intro:
      "Kadıköy’de eski apartman balkonları dardır. Katlanır cam balkon ve pencere yenileme için yerinde ölçü alırız.",
    housing:
      "Merdiven dönüşü ve asansörsüz bina, camın nasıl çıkarılacağını değiştirir. Bunu keşifte görür, montaj gününü buna göre kurarız.",
  },
  {
    slug: "umraniye",
    name: "Ümraniye",
    city: "İstanbul",
    intro:
      "Ümraniye konutlarında PVC, sineklik ve cam balkon montajını Pendik’teki üretime bağlarız.",
    housing:
      "Cadde üstü dairelerde ses için cam kombinasyonu standart ısıcamdan farklı olabilir. Farkı teklifte ayrı satırda gösteririz.",
  },
  {
    slug: "cekmekoy",
    name: "Çekmeköy",
    city: "İstanbul",
    intro:
      "Çekmeköy’de site ve müstakil konutlarda geniş balkon ve doğrama için keşfe geliyoruz.",
    housing:
      "Geniş açıklıkta fiyatı kanat sayısı ve ray tipi belirler. Tek cam görünüp üç kanat çıkan işleri ölçüden sonra netleştiririz.",
  },
  {
    slug: "gebze",
    name: "Gebze",
    city: "Kocaeli",
    intro:
      "Gebze, Pendik’e yakın olduğu için keşif hattındadır. Yeni konut bölgeleri için gün planlarız.",
    housing:
      "Konut sitelerinde PVC ve cam balkon birlikte istenir. Sanayi yapıları bu sayfanın konusu değildir; konut ve balkon işi için arayın.",
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}

export function relatedAreas(slug: string, count = 4) {
  const index = areas.findIndex((area) => area.slug === slug);
  const others = areas.filter((area) => area.slug !== slug);
  const start = index < 0 ? 0 : index % others.length;
  return [...others.slice(start), ...others.slice(0, start)].slice(0, count);
}

export function areaServiceParams() {
  return areas.flatMap((area) =>
    services.map((service) => ({ bolge: area.slug, hizmet: service.slug })),
  );
}
