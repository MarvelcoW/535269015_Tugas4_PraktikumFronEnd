import Container from "./Container";

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
      <Container>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-slate-600">{subtitle}</p>}
      </Container>
    </section>
  );
}