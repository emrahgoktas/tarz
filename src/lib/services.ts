export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  description: string;
  image: string;
  alt: string;
  points: string[];
  systems: { title: string; text: string }[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "aluminyum-dograma",
    title: "Alüminyum Doğrama",
    short: "alüminyum doğrama",
    summary:
      "Isı bariyerli pencere ve sürme kapı. Geniş açıklıkta ince profil, düzgün kapanış.",
    description:
      "Alüminyum doğrama, geniş balkon kapısı ve yüksek pencere boşluklarında camı taşır. Isı bariyerli profil kışın soğuğu, yazın sıcağı kesmeye yardım eder. Pendik ve Anadolu Yakası’ndaki dairelerde sürme kapı, kanatlı pencere ve doğrama kapıyı yerinde ölçüp üretir, kendi ekibimizle takarız.",
    image: "/images/aluminyum.jpg",
    alt: "Geniş cam açıklıklı, ince profilli modern bir konut cephesi",
    points: [
      "İnce profil, daha geniş cam",
      "Isı bariyerli profil seçeneği",
      "Yüksek katta kanat ve cam kalınlığı rüzgara göre hesaplanır",
      "Eski doğrama sökümü gerekiyorsa montaj planına yazılır",
    ],
    systems: [
      {
        title: "Isı yalıtımlı pencere",
        text: "Oda pencerelerinde ısı bariyerli kasa ve kanat. Cam kombinasyonu keşifte, cepheye ve kata göre seçilir.",
      },
      {
        title: "Sürme balkon kapısı",
        text: "Geniş açıklıklarda ray üzerinde yürüyen kanat. Eşik yüksekliği ve kanat sayısı ölçüyü belirler.",
      },
      {
        title: "Doğrama kapı",
        text: "Balkon ve ara kapılarda alüminyum kasa. Kullanım sıklığına göre menteşe ve kilit seçilir.",
      },
      {
        title: "Renk ve yüzey",
        text: "Profil rengi mevcut doğrama ve site kuralına göre konuşulur. Karar, ölçü formuna yazılır.",
      },
    ],
    faqs: [
      {
        q: "Alüminyum mu PVC mi seçilmeli?",
        a: "Geniş sürme açıklık ve ince profil isteniyorsa alüminyum öne çıkar. Standart oda penceresinde PVC çoğu daire için yeterlidir. Keşifte her iki fiyatı da yan yana yazarız.",
      },
      {
        q: "Isı bariyeri şart mı?",
        a: "Isıtılan odada bariyersiz profil camın kenarından soğuk geçirir. Oda ile balkon arasında kullanılacak doğramada bariyerli profili teklifte ayrı satır olarak gösteririz.",
      },
      {
        q: "Yüksek katta sürme kapı sorun olur mu?",
        a: "Rüzgar, kanat genişliğini ve cam kalınlığını değiştirir. Bunu balkonda, pencereyi açarak görürüz. Uygun olmayan ölçüyü sırf fiyat düşsün diye önermeyiz.",
      },
      {
        q: "Eski doğramayı söküyor musunuz?",
        a: "Evet, söküm işin parçasıysa teklifte yazar. Molozun nasıl indirileceği apartman kurallarına göre keşifte netleşir.",
      },
    ],
  },
  {
    slug: "pvc-kapi-pencere",
    title: "PVC Kapı Pencere",
    short: "PVC kapı ve pencere",
    summary:
      "Oda penceresi, balkon kapısı ve PVC kapı. Çift cam, çok odacıklı profil, temiz montaj.",
    description:
      "PVC doğrama, dairelerde pencere ve balkon kapısının yenilenmesinde kullandığımız sistemdir. Çok odacıklı profil ve ısıcam birlikte çalışır. Asıl farkı montaj yapar: kasa teraziye alınmazsa kanat sürter, fitil hava kaçırır. Ölçüyü yerinde alır, kasayı buna göre hazırlarız.",
    image: "/images/pvc.jpg",
    alt: "Geniş camlı, beyaz doğrama açıklıkları olan modern bir ev",
    points: [
      "Pencere, balkon kapısı ve PVC kapı",
      "Isıcam standart teklif kalemidir",
      "Ses için cam kombinasyonu ayrı satırda belirtilir",
      "Montaj sonrası kanat ayarı yapılır",
    ],
    systems: [
      {
        title: "Pencere",
        text: "Tek kanat, çift kanat ve vasistas. Odanın kullanımına göre açılım yönünü yerinde kararlaştırırız.",
      },
      {
        title: "Balkon kapısı",
        text: "Kanatlı veya sürme. Eşik, içeri su girmemesi için parapet ve zemin kotuna göre ayarlanır.",
      },
      {
        title: "PVC kapı",
        text: "İç mekân ve uygun açıklıklarda kapı. Kilit ve eşik, kullanım sıklığına göre seçilir.",
      },
      {
        title: "Cam seçimi",
        text: "Standart iş ısıcamdır. Cadde üstü dairelerde ses için farklı cam kombinasyonu teklifte ayrıca yazılır.",
      },
    ],
    faqs: [
      {
        q: "PVC pencere fiyatı neye göre değişir?",
        a: "En, boy, kanat sayısı, cam cinsi ve renk fiyatı değiştirir. Söküm ve vinç gerekiyorsa bu da ayrı kalemdir. Tek birim fiyat vermek yerine ölçü sonrası döküm yazarız.",
      },
      {
        q: "Beyaz profil dışındaki renkler olur mu?",
        a: "Olur. Renk, profilin stok ve kaplama türüne göre süreyi etkiler. Site yönetimi renk sınırı koyduysa keşifte bunu not ederiz.",
      },
      {
        q: "Montaj evi dağıtır mı?",
        a: "Söküm toz çıkarır. Zemini örter, söktüğümüz doğramayı aynı gün indirir, alanı süpürülmüş bırakırız. Boya badana işi bu kapsamda değildir.",
      },
      {
        q: "Kanat sonradan ayarlanır mı?",
        a: "Yeni montajda ayar teslimin parçasıdır. Kullanımla oluşan sürtmelerde bizi arayın; ayar, garanti koşullarına göre yapılır.",
      },
    ],
  },
  {
    slug: "cam-balkon",
    title: "Cam Balkon",
    short: "cam balkon",
    summary:
      "Katlanır, ısıcamlı, sürme ve giyotin. Balkon kapanır, yazın kanatlar toplanır.",
    description:
      "Cam balkon, mevcut balkonu rüzgâr ve yağmurdan kapatır. Doğru sistem balkonun enine, parapet yüksekliğine ve katın rüzgârına göre seçilir. Katlanır sistem yazın toplanır, ısıcamlı sistem kışın oda niyetine kullanılan balkonlarda öne çıkar. Ölçüyü biz alırız; hazır stok cam takmayız.",
    image: "/images/cam-balkon.jpg",
    alt: "Balkonları olan modern bir apartman cephesi",
    points: [
      "Her balkon ayrı ölçülür",
      "Katlanır, ısıcamlı, sürme ve giyotin seçenekleri",
      "Parapet, korkuluk ve süpürgelik keşifte kontrol edilir",
      "Cam kalınlığı kata ve açıklığa göre belirlenir",
    ],
    systems: [
      {
        title: "Katlanır cam balkon",
        text: "Kanatlar yana toplanır. Yazın balkonu açmak isteyen dairelerde en sık kullanılan sistemdir.",
      },
      {
        title: "Isıcamlı cam balkon",
        text: "Çift camlı kanat. Kışın balkonu odaya katmak isteniyorsa teklifte bu sistemi ayrıca fiyatlarız.",
      },
      {
        title: "Sürme cam balkon",
        text: "Kanatlar rayda yürür. Geniş ve düz cephelerde açılım rahat olur. Alt ray seçimi su tahliyesini etkiler.",
      },
      {
        title: "Giyotin cam",
        text: "Camlar dikey toplanır. Geniş balkon ve dükkân önü açıklıklarda sorulur. Motorlu seçenek keşifte konuşulur.",
      },
    ],
    faqs: [
      {
        q: "Cam balkon evi ısıtır mı?",
        a: "Tek cam rüzgârı ve yağmuru keser, odayı ısıtmaz. Balkon kışın kullanılacaksa ısıcamlı sistemi ve alttaki parapetin yalıtımını ayrıca konuşuruz.",
      },
      {
        q: "Balkon ölçüsü kendim iletilirse olur mu?",
        a: "Üretim ölçüsünü biz alırız. Bir santimlik kaçıklık kanadın toplanmasını bozar. Kendi ölçünüzle fiyat çalışması yapılabilir, imalat ölçüsü tekrar alınır.",
      },
      {
        q: "Alt katlardan farklı renk olur mu?",
        a: "Cam ve profil rengi cephede belli olur. Apartman veya site tek renk istiyorsa buna uyarız. Kural yoksa seçenekleri keşifte gösteririz.",
      },
      {
        q: "Cam balkon kaç günde biter?",
        a: "Onay ve malzeme süresinden sonra tek balkon montajı çoğu dairede bir gün sürer. Söküm, kaynaklı korkuluk veya çok kanatlı ısıcam işi uzatır. Süreyi teklifte yazarız.",
      },
    ],
  },
  {
    slug: "sineklik",
    title: "Sineklik",
    short: "sineklik",
    summary:
      "Plise, menteşeli ve sürgülü sineklik. Pencere ve kapı ölçüsüne göre, doğramayla birlikte veya ayrı.",
    description:
      "Sineklik, pencere ve kapı kanadının çalışmasını bozmadan teli kapatır. Plise sistem kapıda toplanır, menteşeli sistem pencerede kanat gibi açılır, sürgülü sistem rayda yürür. Doğrama yenileniyorsa sinekliği aynı ölçüde birlikte planlarız. Mevcut pencereye de ayrı keşif yapılır.",
    image: "/images/sineklik.jpg",
    alt: "Geniş pencereli, aydınlık modern bir daire",
    points: [
      "Plise, menteşeli ve sürgülü seçenek",
      "Pencere ve kapı için ayrı sistem",
      "PVC veya alüminyum doğrama ile birlikte ölçülür",
      "Renk, mevcut kasaya yakın seçilir",
    ],
    systems: [
      {
        title: "Plise sineklik",
        text: "Kumaş akordeon gibi toplanır. Balkon kapısı ve sık girilip çıkılan kanatlarda kullanımı rahattır.",
      },
      {
        title: "Menteşeli sineklik",
        text: "Pencere kanadı gibi açılır. Oda pencerelerinde yer kaplamadan durur, kapanınca kasaya oturur.",
      },
      {
        title: "Sürgülü sineklik",
        text: "Ray üzerinde yana kayar. Sürme doğramanın yanında, kanatla aynı yönde çalışacak şekilde ölçülür.",
      },
      {
        title: "Kapı sinekliği",
        text: "Geniş kapılarda plise tercih edilir. Mıknatıslı kapanış ve eşik, zemine göre seçilir.",
      },
    ],
    faqs: [
      {
        q: "Sineklik sonradan takılır mı?",
        a: "Mevcut PVC ve alüminyum kasaya çoğu zaman takılır. Kasa eğriyse veya yer kalmadıysa keşifte söyleriz, zorlamayız.",
      },
      {
        q: "Plise mi menteşeli mi?",
        a: "Kapıda plise, standart pencerede menteşeli sistem daha rahattır. Sürme doğramada sürgülü sineklik kanatla çakışmaz.",
      },
      {
        q: "Kumaş yırtılırsa değişir mi?",
        a: "Plise teli değişebilir. Yırtık kullanım hatasıysa garanti dışı kalır. Normal aşınmada durumu yerinde görüp söyleriz.",
      },
      {
        q: "Sadece sineklik için keşif gelir misiniz?",
        a: "Evet. Küçük işte de ölçü yerinde alınır. Bölge dışındaysa önce telefondan bakalım, boşuna yol çıkarmayalım.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function otherServices(slug: string) {
  return services.filter((service) => service.slug !== slug);
}
