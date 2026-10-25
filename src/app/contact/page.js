import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

const contacts = [
  { label: "Email", value: "marvelco.535269015@stu.untar.ac.id" },
  { label: "Telepon", value: "+62 18 0402 8017" },
  { label: "Alamat", value: "Jl. Sudirman No. 1, Jakarta" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Kontak" subtitle="Kami siap membantu kebutuhan Anda." />
      <section className="py-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {contacts.map((c) => (
              <div key={c.label} className="rounded-2xl border border-slate-200 p-6">
                <p className="text-sm text-slate-500">{c.label}</p>
                <p className="mt-1 font-medium text-slate-900">{c.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}