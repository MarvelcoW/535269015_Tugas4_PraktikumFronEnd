import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      <PageHeader title={service.title} subtitle={service.short} />
      <section className="py-12">
        <Container className="max-w-3xl">
          <p className="text-slate-700">{service.description}</p>

          <h2 className="mt-8 text-lg font-semibold text-slate-900">Keunggulan</h2>
          <ul className="mt-3 space-y-2">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-slate-600">
                <span className="text-indigo-600">✓</span> {f}
              </li>
            ))}
          </ul>

          <Link
            href="/services"
            className="mt-10 inline-block text-sm font-medium text-indigo-600 hover:underline"
          >
            ← Kembali ke Layanan
          </Link>
        </Container>
      </section>
    </>
  );
}