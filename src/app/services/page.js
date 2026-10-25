import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata = { title: "Layanan - Nusantara Tech" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Layanan"
        subtitle="Pilih layanan yang sesuai dengan kebutuhan bisnis Anda."
      />
      <section className="py-12">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}