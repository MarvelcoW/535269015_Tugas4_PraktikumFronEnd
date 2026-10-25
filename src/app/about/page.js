import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

const values = [
  { title: "Kualitas", text: "Setiap proyek dikerjakan dengan standar tinggi." },
  { title: "Kolaborasi", text: "Kami bekerja bersama klien, bukan hanya untuk klien." },
  { title: "Inovasi", text: "Selalu mengikuti teknologi terbaru." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Tentang Kami"
        subtitle="Nusantara Tech berdiri sejak 2020 dan fokus pada pengembangan solusi digital."
      />
      <section className="py-12">
        <Container>
          <h2 className="text-xl font-semibold text-slate-900">Nilai Perusahaan</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-semibold text-indigo-600">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}