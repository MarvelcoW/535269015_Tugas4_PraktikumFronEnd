import Link from "next/link";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 py-20 text-white sm:py-28">
        <Container>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
            Solusi Digital untuk Bisnis Anda
          </h1>
          <p className="mt-4 max-w-xl text-indigo-100">
            Kami membantu perusahaan bertumbuh lewat website, aplikasi, dan desain
            yang berkualitas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
            >
              Lihat Layanan
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Hubungi Kami
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900">Layanan Kami</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}