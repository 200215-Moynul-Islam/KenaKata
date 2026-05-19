export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant bg-surface-container-low py-4 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-margin-desktop">
        <div className="flex justify-center">
          <p className="font-body-sm text-sm text-on-surface-variant opacity-60">
            © {currentYear} KenaKata. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
