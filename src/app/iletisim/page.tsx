import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactPanel } from "@/components/ContactPanel";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "İletişim",
  description: `Tarz Yapı iletişim: ${site.phone}, ${site.address.street}, Pendik. Ücretsiz keşif için yazın veya arayın.`,
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="İletişim"
        description="Keşif için formu doldurun ya da doğrudan arayın. Dönüş, çalışma saatleri içinde yapılır."
        image="/images/cam-balkon.jpg"
        alt="Balkonları olan modern bir apartman"
        crumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "İletişim" },
        ]}
      />
      <Section>
        <ContactPanel />
      </Section>
    </>
  );
}
