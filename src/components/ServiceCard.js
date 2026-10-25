import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-slate-600">{service.short}</p>
      <span className="mt-4 inline-block text-sm font-medium text-indigo-600">
        Lihat detail →
      </span>
    </Link>
  );
}