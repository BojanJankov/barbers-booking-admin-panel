export default function Footer() {
  return (
    <footer className="bg-background text-text py-6 mt-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} Admin Panel. All rights reserved.
      </div>
    </footer>
  );
}
