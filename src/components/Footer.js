import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-8 text-slate-300">
      <Container className="flex flex-col items-center justify-between gap-2 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} Nusantara Tech. All rights reserved.</p>
        <p>Jakarta, Indonesia</p>
      </Container>
    </footer>
  );
}